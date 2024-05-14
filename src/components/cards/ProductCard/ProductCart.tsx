"use client";

import {
  RiHeart3Line,
  RiSearch2Line,
  RiShareLine,
  RiShoppingCartLine,
} from "react-icons/ri";

import { Rating } from "@/components";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import queryString from "query-string";
import { formatCurrency } from "@/utlis/common";
import ProductQuickView from "@/components/cards/ProductQuickView";
import { useDisclosure } from "@nextui-org/react";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";

export default function ProductCart(props: any) {
  const {
    image,
    name,
    price,
    id,
    slug,
    discount,
    category,
    review,
    summary,
    priceCurrent,
    onClick,
    isAddWishList = true,
  } = props;

  const router = useRouter();
  const { lang } = useThemeConfig();
  const { handleAddCart, handleAddWishlist } = useAuth();

  const [isAddCart, setIsAddCart] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      if (isAddCart) setIsAddCart(false);
    }, 5000);
  }, [isAddCart]);

  return (
    <div className="w-full min-h-[352px]">
      {isOpen ? (
        <ProductQuickView
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          name={name}
          image={image}
          price={price}
          discount={discount}
          summary={summary}
          review={review}
          priceCurrent={priceCurrent}
          id={id}
        />
      ) : null}

      <div className="w-full overflow-hidden group h-56 bg-neutral-100 relative cursor-pointer">
        <div
          onClick={() => {
            router.push(
              queryString.stringifyUrl({
                url: `/${lang}/products/${slug}`,
                query: {
                  product_id: id,
                },
              })
            );
            if (onClick) onClick();
          }}
        >
          {image ? (
            <Image
              src={image}
              alt="banner"
              //priority={true}
              sizes="100vw"
              fill={true}
              objectFit="cover"
            />
          ) : null}
        </div>
        {discount ? (
          <div className="absolute bg-green-700 w-fit text-center px-2 top-4">
            <span className="uppercase text-xs text-white whitespace-nowrap">
              - {formatCurrency(discount.value)}
              {discount.type === "FIXED" ? "VND" : "% OFF"}
            </span>
          </div>
        ) : null}

        <div className="absolute -bottom-10 group-hover:bottom-3 transition-all duration-300 left-[50%] -translate-x-[50%]">
          <ul className="flex gap-6 bg-white w-fit px-4 py-2 rounded shadow">
            <li>
              {isAddCart ? (
                <FiCheck className="w-6 h-6 hover:text-green-700" />
              ) : (
                <RiShoppingCartLine
                  onClick={() => {
                    setIsAddCart(!isAddCart);
                    handleAddCart({
                      image,
                      name,
                      price: priceCurrent,
                      id,
                      quantity: 1,
                    });
                  }}
                  className="w-6 h-6 hover:text-green-700"
                />
              )}
            </li>
            {isAddWishList ? (
              <li
                onClick={() => {
                  handleAddWishlist({
                    image,
                    name,
                    price: price,
                    priceCurrent: priceCurrent,
                    discount: discount,
                    id,
                    quantity: 1,
                    summary,
                    review,
                  });
                }}
              >
                <RiHeart3Line className="w-6 h-6 hover:text-green-700" />
              </li>
            ) : null}

            <li onClick={onOpen}>
              <RiSearch2Line className="w-6 h-6 hover:text-green-700" />
            </li>
            <li>
              <RiShareLine className="w-6 h-6 hover:text-green-700" />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">{name || "jhjka ashda sdkjashd"}</p>
        <p className="text-xs mt-2 mb-1 text-neutral-500">{category?.name}</p>
        <p className="text-sm font-medium text-green-600">
          {discount ? (
            <>
              <span className="line-through text-neutral-500 text-xs mr-2">
                {formatCurrency(price)} VND
              </span>
              <span>
                {formatCurrency(priceCurrent)}
                VND
              </span>
            </>
          ) : (
            <span> {formatCurrency(price)} VND</span>
          )}
        </p>

        <Rating
          readOnly
          count={5}
          defaultValue={review ? review.avg_star : 0}
          className="justify-center"
        />
      </div>
    </div>
  );
}
