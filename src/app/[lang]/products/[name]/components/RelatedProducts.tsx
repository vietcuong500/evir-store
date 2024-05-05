"use client";

import { ProductCart } from "@/components";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

export default function RelatedProducts(props: any) {
  const { data } = props;
  return (
    <div id="related-products" className="mt-8">
      <div className="w-fit mb-8" id="">
        <p className="uppercase font-semibold text-neutral-800 py-2">
          Có thể bạn sẽ thích
        </p>
        <p className="w-1/2 h-[2px] bg-green-700"></p>
      </div>

      <Slider {...settings}>
        {data.slice(0, 4).map((el: any, id: number) => (
          <ProductCart
            id={el.id}
            name={el.name}
            slug={el.slug}
            price={el.price}
            priceCurrent={el.price_current}
            discount={el.discount}
            category={el.category}
            image={el.images ? el.images : ""}
            review={el.review}
            summary={el.about_the_product}
            key={id}
          />
        ))}
      </Slider>
    </div>
  );
}
