"use client"

import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { useRouter } from "next/navigation";

export default function ButtonCheckout(props: any) {
  const { item } = props;
  const { images, name, id, price_current } = item;

  const { handleAddCart } = useAuth();
  const router = useRouter();
  const {lang} = useThemeConfig()
  const handleCheckout = () => {
    handleAddCart({
      image: images,
      id,
      price: price_current,
      name,
      quantity: 1,
    });
    router.push(`/${lang}/checkout`);
  };
  return (
    <button
      onClick={handleCheckout}
      className="bg-amber-800 hover:bg-amber-900 w-full mt-4 max-w-[320px] text-white flex flex-col text-center items-center py-2 rounded shadow"
    >
      <span className="text-lg uppercase font-semibold">Mua ngay</span>
      <span className="text-xs">
        Giao hàng tận nơi, kiểm tra thanh toán khi nhận hàng
      </span>
    </button>
  );
}
