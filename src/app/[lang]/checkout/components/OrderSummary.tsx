"use client";

import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { formatCurrency } from "@/utlis/common";
import { Controller, useFormContext } from "react-hook-form";
import { MdLocalShipping } from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";
import { Button } from "@/components";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";

const list_payment = [
  {
    label: "Thanh toán khi nhận hàng",
    value: "COD",
  },
  {
    label: " Thẻ ngân hàng (VNPAY)",
    value: "VNPAY",
  },
  // {
  //   label: "ZALOPAY",
  //   value: "ZALOPAY",
  // },
];

function OrderSummary() {
  const { resetCart } = useAuth();
  const { control, handleSubmit } = useFormContext();
  const router = useRouter();
  const { cart } = useAuth();
  const { lang } = useThemeConfig();
  const subtotal = cart.reduce(
    (acc: any, curr: any) => curr.quantity * curr.price + acc,
    0
  );
  const [isPending, setIsPending] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setIsPending(true);
    const token = getCookie("token");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/checkout`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await res.json();

    if (result.code === 200) {
      if (data.payment_type === "COD") {
        router.push(`/${lang}/order/complete`);
      } else {
        window.open(result.data.url_redirect, "_blank");
      }
    }
    setIsPending(false);
    resetCart()
  });
  return (
    <div className="bg-neutral-100 px-5 py-5">
      <p className="text-lg font-medium text-center">Đơn hàng</p>
      <div className="bg-white p-4 mt-6">
        <div className="uppercase font-medium flex items-center justify-between">
          <p>Sản phẩm</p>
          <p>Tổng tiền</p>
        </div>
        <div className="w-full h-[1px] bg-neutral-300 my-3"></div>

        {cart.map((el: any, id: number) => (
          <div
            key={id}
            className="flex items-center justify-between text-sm text-neutral-800 my-2"
          >
            <div>
              <p>{el.name}</p>
              <p>
                <span className="font-semibold text-xs">Số lượng:</span>{" "}
                {el.quantity}
              </p>
            </div>
            <p>{formatCurrency(el.price * el.quantity)} vnđ</p>
          </div>
        ))}
        <div className="w-full h-[1px] bg-neutral-300 my-3"></div>
        <div className="flex items-center justify-between font-semibold">
          <p className="text-neutral-700">Tổng tiền</p>
          <p className="text-green-800 font-medium">
            {formatCurrency(subtotal)} vnd
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="flex items-center gap-2 font-semibold">
          <FiCreditCard />
          Phương thức thanh toán
        </p>
        <div className="mt-2 flex flex-col gap-4">
          {list_payment.map((el: any, id: number) => (
            <Controller
              key={id}
              control={control}
              name="payment_type"
              render={({ field: { onChange, value } }) => (
                <div className="flex items-center">
                  <input
                    id={el.value}
                    type="radio"
                    value={el.value}
                    name="credit"
                    checked={value === el.value}
                    onChange={(e) => {
                      if (e.target.checked) onChange(el.value);
                    }}
                    className="w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={el.value}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {el.label}
                  </label>
                </div>
              )}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="flex items-center gap-2 font-semibold">
          <MdLocalShipping />
          Phương thức giao hàng
        </p>
        <div className="mt-2">
          <div className="text-sm flex items-center gap-2">
            <input
              checked
              id="shipping"
              type="radio"
              // value="atm"
              name="shipping"
              className="w-4 h-4 rounded-full overflow-hidden text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="shipping"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Giao hàng nhanh
            </label>
          </div>
        </div>
      </div>
      <Button loading={isPending} onClick={onSubmit} className="w-full mt-8">
        Thanh toán
      </Button>
    </div>
  );
}

export default OrderSummary;
