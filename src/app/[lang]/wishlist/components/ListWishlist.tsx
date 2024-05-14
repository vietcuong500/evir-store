"use client";

import { ProductCart } from "@/components";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { MdClose } from "react-icons/md";

export default function ListWishlist(props: any) {
  const { wishlist, handleRemoveWishlist } = useAuth();
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 mt-4">
      {wishlist.map((el: any, id: number) => (
        <div key={id}>
          <div>
            <button
              onClick={() => handleRemoveWishlist(el.id)}
              className="flex gap-2 items-center mb-2 text-neutral-900 hover:text-neutral-500"
            >
              <MdClose />
              <span className="text-sm uppercase font-medium">Xóa</span>
            </button>
          </div>
          <ProductCart
            image={el.image}
            id={el.id}
            name={el.name}
            priceCurrent={el?.priceCurrent}
            price={el?.price}
            discount={el?.discount}
            isAddWishList={false}
            review={el?.review}
            summary={el?.summary}
          />
        </div>
      ))}
    </div>
  );
}
