"use client";

import { useState } from "react";
import clsx from "clsx";

const ProductCategoriesItem = (props: any) => {
  const { title, value, active, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between text-sm cursor-pointer"
    >
      <p
        className={clsx({
          "text-neutral-700 text-sm capitalize": true,
          "font-semibold": active,
        })}
      >
        {title}
      </p>
      <p
        className={clsx({
          "flex items-center transition-all duration-200 justify-center rounded-xl text-center text-xs w-8 h-5 border border-transparent":
            true,
          "text-neutral-900 border-neutral-600": !active,
          "bg-emerald-700 text-white": active,
        })}
      >
        {value}
      </p>
    </div>
  );
};

const categories = [
  {
    title: "Accessories",
    value: 16,
  },
  {
    title: "clock",
    value: 5,
  },
  {
    title: "decor",
    value: 12,
  },
  {
    title: "toy",
    value: 4,
  },
  {
    title: "uncategorized",
    value: 0,
  },
];

export default function ProductCategories() {
  const [active, setActive] = useState("");
  return (
    <div>
      <p className="text-xl font-semibold text-neutral-900">Danh mục</p>
      <div className="mt-2 flex flex-col gap-3">
        {categories.map((el: any, id: number) => (
          <ProductCategoriesItem
            active={el.value === active}
            key={id}
            title={el.title}
            value={el.value}
            onClick={() => {
              setActive(el.value);
            }}
          />
        ))}
      </div>
    </div>
  );
}
