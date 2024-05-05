"use client";

import { Button } from "@/components";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { FormProvider, useForm } from "react-hook-form";
import OrderInfo from "./OrderInfo";
import OrderSummary from "./OrderSummary";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";

const schema = yup.object({
  full_name: yup.string().required(),
  country: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  postcode: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email(),
  payment_type: yup.string(),
  note: yup.string(),
  return_url: yup.string(),
  products: yup.array(),
});

function OrderProvider() {
  const { cart } = useAuth();
  const {lang} = useThemeConfig();
  const methods = useForm({
    defaultValues: {
      full_name: "",
      country: "",
      address: "",
      city: "",
      postcode: "",
      phone: "",
      email: "",
      payment_type: "VNPAY",
      note: "",
      return_url: `${process.env.NEXT_PUBLIC_URL_RETURN}/${lang}/order`,
      products: cart.map((el: any) => ({
        quantity: el.quantity,
        product_id: el.id,
      })),
    },
    resolver: yupResolver(schema),
    mode: "all",
  });
  return (
    <FormProvider {...methods}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <OrderInfo />
        <OrderSummary />
      </div>
    </FormProvider>
  );
}

export default OrderProvider;
