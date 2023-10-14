"use client";

import { CollectionCart } from "../index";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./FeatureSection.scss";

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
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <p className="text-sm text-center font-medium text-green-600">
            WOODEN ACCESSORIES
          </p>
          <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
            FEATURED Categories
          </p>
          <p className="text-sm text-neutral-800 text-center font-light">
            Visit our shop to see amazing creations from our designers.
          </p>
        </div>
        <Slider {...settings} className="mt-6">
          <CollectionCart />
          <CollectionCart />
          <CollectionCart />
        </Slider>
      </div>
    </div>
  );
}
