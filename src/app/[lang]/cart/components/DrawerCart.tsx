"use client";

import { Button, Drawer } from "@/components";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { formatCurrency } from "@/utlis/common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function DrawerCart(props: any) {
  const { open, setOpen } = props;
  const router = useRouter();
  const { lang } = useThemeConfig();

  const {
    cart,
    handlePlusQuantity,
    handleMinusQuantity,
    handleRemoveCart,
    handleChangeQuantity,
  } = useAuth();

  const total = cart.reduce(
    (acc: any, curr: any) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <Drawer className="w-1/2" placement="right" open={open} setOpen={setOpen}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200">
          <p className="text-xl font-[playfair] font-medium">Giỏ hàng</p>
          <MdClose onClick={setOpen} className="text-xl text-neutral-500" />
        </div>

        <div className="p-5 grow flex flex-col gap-6 max-h-[900px] overflow-auto">
          {cart.map((el: any, id: number) => (
            <div key={id} className="flex flex-row gap-4 items-stretch">
              <div className="w-[4.5rem] h-24 rounded-sm bg-neutral-200">
                <Image
                  src={el.image}
                  alt={el.name}
                  height={96}
                  width={72}
                  //objectFit="fill"
                  style={{
                    objectFit: "contain",
                  }}
                  // sizes="100vw"
                  // fill={true}
                  // objectFit="cover"
                />
              </div>
              <div className="grow">
                <p className="text-sm font-medium">{el.name}</p>
                <p className="text-[#695e4c] text-sm">
                  {formatCurrency(el.price)} vnd
                </p>
                <div className="flex items-center border border-neutral-200 w-fit rounded mt-2">
                  <button
                    onClick={() => handleMinusQuantity(el.id)}
                    className="w-8 h-8 flex-center hover:bg-primary hover:text-white"
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="number"
                    value={el.quantity}
                    onChange={(e) =>
                      handleChangeQuantity(el.id, Number(e.target.value))
                    }
                    className="w-8 h-8 text-center flex-center border-l border-r border-neutral-200"
                  />
                  <button
                    onClick={() => handlePlusQuantity(el.id)}
                    className="w-8 h-8 flex-center hover:bg-primary hover:text-white"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <FiTrash
                onClick={() => handleRemoveCart(el.id)}
                className="hover:text-neutral-500 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="px-5 py-3 border-t border-neutral-200 flex flex-col gap-2">
          <p className="flex justify-between uppercase font-semibold">
            <span className="text-sm text-neutral-800">Thành tiền</span>
            <span className="text-[#695e4c]">{formatCurrency(total)} VND</span>
          </p>
          <button
            onClick={() => router.push(`/${lang}/cart`)}
            className="h-12 px-4 py-2 hover:bg-neutral-300 active:ring-2 transition-all duration-300 active:ring-neutral-500 focus:ring-neutral-500 rounded shadow-sm bg-neutral-200 text-neutral-900 uppercase font-medium text-sm"
          >
            Giỏ hàng
          </button>
          <Button
            onClick={() => router.push(`/${lang}/checkout`)}
            className="h-12"
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
