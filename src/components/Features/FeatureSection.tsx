"use client";

import Slider from "react-slick";
import { ProductCart } from "../index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./FeatureSection.scss";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const tabs = [
  {
    value: "bestseller",
    label: "Bán chạy nhất",
  },
  {
    value: "newarrial",
    label: "mới ra mắt",
  },
  {
    value: "sales",
    label: "Giảm giá",
  },
];

const ft = (products: any) => {
  const { data, total } = products;
  let result = data;

  if (total < 8) {
    result = [
      ...result,
      _.range(0, 8 - total).map((el) => ({ name: "custom" })),
    ].flat();
  } else if (total < 16) {
    result = [
      ...result,
      _.range(0, 16 - total).map((el) => ({ name: "custom" })),
    ].flat();
  } else result = data;
  return {
    ...products,
    data: result,
    total,
  };
};

export default function FeatureSection(props: any) {
  const [tabCurrent, setTabCurrent] = useState("bestseller");
  const products = ft(props.products);
  const productsNew = ft(props.productsNew);
  const productsDiscount = ft(props.productsDiscount);
  const [data, setData] = useState(products);

  const { products: productsConfig } = useThemeConfig();
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <p className="text-sm text-center font-medium text-green-600 uppercase">
            {productsConfig.sub_title}
          </p>
          <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
            {productsConfig.title}
          </p>
          <p className="text-sm text-neutral-800 text-center font-light">
            {productsConfig.desc}
          </p>

          <ul className="flex items-center justify-center mt-4 gap-x-6">
            {tabs.map((el: any, id: number) => (
              <li
                onClick={() => {
                  if (el.value === "bestseller") setData(products);
                  else if (el.value === "sales") setData(productsDiscount);
                  else setData(productsNew);
                  setTabCurrent(el.value);
                }}
                key={id}
                className="flex flex-col group"
              >
                <span className="text-neutral-800 cursor-pointer uppercase font-medium group-hove:text-neutral-900">
                  {el.label}
                </span>
                <span
                  className={clsx(
                    "inline-block h-[1px] transition-all duration-200 w-0 group-hover:w-full bg-green-600",
                    {
                      "w-full": tabCurrent === el.value,
                    }
                  )}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Slider {...settings}>
            {data.data.map((el: any, id: number) => {
              if (el.name === "custom") return <div key={id}></div>;
              else
                return (
                  <ProductCart
                    key={id}
                    image={el.images}
                    name={el.name}
                    price={el.price}
                    id={el.id}
                    slug={el.slug}
                    discount={el.discount}
                    category={el.category}
                    review={el.review}
                    summary={el.summary}
                    priceCurrent={el.price_current}
                  />
                );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
