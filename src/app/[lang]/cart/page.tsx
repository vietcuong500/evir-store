"use client";

import { Button, Input } from "@/components";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { FiCreditCard, FiMinus, FiPlus } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import CartItem from "./components/CartItem";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/utlis/common";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";

export default function CartPage() {
  const router = useRouter();
  const { lang } = useThemeConfig();
  const { cart, handleMinusQuantity, handlePlusQuantity, handleRemoveCart } =
    useAuth();
  const totalCount = cart.reduce(
    (acc: any, curr: any) => curr.quantity + acc,
    0
  );

  const totalPrice = cart.reduce(
    (acc: any, curr: any) => curr.quantity * curr.price + acc,
    0
  );

  return (
    <div>
      <div className="container mx-auto gap-8 my-8 flex flex-col xl:flex-row">
        <div className="w-full xl:w-8/12">
          <div className=" flex flex-col gap-6">
            <p className="text-sm font-medium text-neutral-800">
              {totalCount} sản phẩm
            </p>
            {cart.map((el: any, id: number) => (
              <CartItem
                key={id}
                name={el.name}
                quantity={el.quantity}
                price={el.price}
                image={el.image}
                onPlus={() => handlePlusQuantity(el.id)}
                onMinus={() => handleMinusQuantity(el.id)}
                onDelete={() => handleRemoveCart(el.id)}
              />
            ))}
          </div>

          <div className="mt-6">
            <p className="uppercase font-semibold mb-2">Mã giảm giá</p>
            <div className="flex gap-3">
              <Input placeholder="Nhập mã giảm giá" />

              <Button className="w-fit whitespace-nowrap">áp dụng</Button>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12">
          <div className="border border-neutral-200 px-5 py-3 rounded">
            <p className="uppercase text-neutral-950 font-semibold mb-2">
              Tạm tính
            </p>
            <div className="text-neutral-800">
              <p className="flex justify-between items-center">
                <span className="text-sm text-neutral-800">Số lượng</span>
                <span>{totalCount}</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="text-sm text-neutral-800"> Tạm tính</span>
                <span>{formatCurrency(totalPrice)} VND</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="text-sm text-neutral-800">Giảm giá</span>
                <span>$0.00</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="text-sm text-neutral-800">Phí vận chuyển</span>
                <span>$0.00</span>
              </p>
              <p className="flex items-center justify-between mt-4 uppercase font-semibold">
                <span className=""> Tổng cộng</span>
                <span className="text-green-700">
                  {formatCurrency(totalPrice)} VND
                </span>
              </p>
            </div>
          </div>
          <Button
            onClick={() => {
              router.push(`/${lang}/checkout`);
            }}
            className="w-full mt-4"
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
}
