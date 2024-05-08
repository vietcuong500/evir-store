"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import clsx from "clsx";
import ImageZoom from "react-image-zooom";


const settings = {
  dots: true,
  infinite: true,
  arrow: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

export default function ProductImages(props: any) {
  const { className, images, lstImage } = props;
  const files = [images, ...lstImage];
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();
  return (
    <div className={`${className}`}>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {files.map((el: any, id: number) => (
          <ImageZoom key={id} src={el} zooom={300}/>
        ))}
      </Slider>
      <Slider
        className="h-[90px]"
        {...settings}
        slidesToShow={files.length < 4 ? files.length : 4}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {files.map((el: any, id: number) => (
          <img
            className={clsx("h-[90px] object-cover object-center", {
              "!w-[120px]": files.length < 3,
            })}
            src={el}
            key={id}
          />
        ))}
      </Slider>
    </div>
  );
}
