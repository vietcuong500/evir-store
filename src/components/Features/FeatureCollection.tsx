"use client";

import { CollectionCart } from "../index";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./FeatureSection.scss";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import queryString from "query-string";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
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

export default function FeatureCollection() {
  const { collection, lang } = useThemeConfig();
  const { sub_title, title, desc, items } = collection;
  const genUrl = (id: number) => {
    const url = queryString.stringifyUrl({
      url: `/${lang}/shop`,
      query: {
        page: 1,
        page_size: 12,
        collection: id,
      },
    });
    return url;
  };
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <p className="text-sm text-center font-medium text-green-600">
            {sub_title}
          </p>
          <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
            {title}
          </p>
          <p className="text-sm text-neutral-800 text-center font-light">
            {desc}{" "}
          </p>
        </div>
        <Slider {...settings} className="mt-6">
          {items.map((el: any, id: number) => (
            <CollectionCart
              key={id}
              image={el.image}
              name={el.title}
              count={el.count}
              link={genUrl(el.id)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
