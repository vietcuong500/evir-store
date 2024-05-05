"use client";

import { Rating } from "@/components";
import { formatCurrency } from "@/utlis/common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useThemeConfig } from "../ThemesProvider/ThemesProvider";

export default function ProductCardLite(props: any) {
  const { name, image, id, price, review } = props;
  const router = useRouter();
  const { lang } = useThemeConfig();
  return (
    <div
      className="flex gap-4"
      onClick={() => {
        router.push(
          queryString.stringifyUrl({
            url: `/${lang}/products/${name}`,
            query: {
              product_id: id,
            },
          })
        );
      }}
    >
      <div className="shrink-0 cursor-pointer w-16 h-[4rem] rounded overflow-hidden bg-neutral-200">
        {image ? (
          <Image
            src={image}
            alt="banner"
            // priority={true}
            // sizes="100vw"
            // fill={true}
            width={64}
            height={64}
            objectFit="cover"
          />
        ) : null}
      </div>
      <div className="text-sm">
        <p className="text-neutral-600 line-clamp-2 cursor-pointer hover:text-lime-800">
          {name}
        </p>
        <p className="text-sm text-green-600 font-medium">
          {formatCurrency(price)} VND
        </p>
        <Rating
          size="sm"
          count={5}
          defaultValue={review ? review.avg_star : 0}
        />
      </div>
    </div>
  );
}
