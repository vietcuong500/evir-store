"use client";

import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import clsx from "clsx";
import { FiHeart } from "react-icons/fi";

export default function ButtonAddWishlist(props: any) {
  const { item } = props;
  const { handleAddWishlist, wishlist } = useAuth();
  const { image, name, id, price_current } = item;
  return (
    <div
      onClick={() =>
        handleAddWishlist({
          image,
          id,
          price: price_current,
          name,
          quantity: 1,
        })
      }
      className="flex gap-2 items-center text-neutral-700 mt-6 cursor-pointer hover:text-neutral-400 w-fit"
    >
      <FiHeart
        className={clsx({
          "text-red-500 fill-red-500": wishlist.find((el: any) => el.id === item.id),
        })}
      />
      <p className="text-sm font-semibold text-neutral-800">Thêm vào sản phẩm yêu thích</p>
    </div>
  );
}
