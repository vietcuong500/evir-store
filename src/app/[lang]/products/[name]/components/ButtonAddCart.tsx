"use client";

import { Button } from "@/components";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function ButtonAddCart(props: any) {
  const { item } = props;
  const { handleAddCart } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const { image, name, id, price_current } = item;
  return (
    <div className="flex items-center gap-4 mt-3 max-w-[320px]">
      <div className="flex items-center border border-neutral-200">
        <button
          onClick={() => {
            if (quantity > 0) setQuantity(quantity - 1);
          }}
          className="w-9 h-9 flex-center hover:bg-green-600 hover:text-white"
        >
          <FiMinus />
        </button>
        <input
          className="w-9 h-9 text-center pl-3 flex-center border-l border-r border-neutral-200"
          type="number"
          value={quantity}
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-9 h-9 flex-center hover:bg-green-600 hover:text-white"
        >
          <FiPlus />
        </button>
      </div>
      <Button
        onClick={() =>
          handleAddCart({ image, id, price: price_current, name, quantity })
        }
        className="w-full"
      >
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
}
