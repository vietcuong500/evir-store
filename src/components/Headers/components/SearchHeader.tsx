"use client";

import { ProductCart } from "@/components/cards";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { calcPriceCurrent } from "@/lib/common";
import { getProducts } from "@/lib/product";
import clsx from "clsx";
import queryString from "query-string";
import { cache, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { useClickAway, useDebounce, useToggle, useWindowSize } from "react-use";

export default function SearchHeader(props: any) {
  const { height } = useWindowSize();
  const { open, setOpen } = props;
  const drawer = useRef(null);
  const { lang } = useThemeConfig();
  const [loading, setLoading] = useState(false);
  const inputSearch = useRef<any>(null);
  useClickAway(drawer, () => {
    if (open) setOpen();
  });

  const [keyword, setKeyword] = useState("");

  const [list, setList] = useState([]);

  const handleSearch = cache(async (search: string) => {
    let query: any = {
      page: 1,
      page_size: 12,
      keyword,
      languageCode: lang.toUpperCase(),
    };

    const url = queryString.stringifyUrl({
      url: `${process.env.NEXT_PUBLIC_API_URL}/product/listing`,
      query,
    });
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["listing-product"],
        revalidate: 60,
      },
    });
    const data = await res.json();
    if (data.code === 200 || data.code === 0) {
      const result = data.data.map((el: any) => {
        const { price, discount } = el;
        let price_current = price;
        if (discount) {
          price_current = calcPriceCurrent(
            price,
            Number(discount.value),
            discount.type
          );
        }

        return {
          ...el,
          price_current,
        };
      });

      return {
        ...data,
        data: result,
      };
    }
    setLoading(false);
    return data;
  });

  useEffect(() => {
    if (open) {
      inputSearch.current?.focus();
      document.querySelector("html")?.classList.add("overflow-hidden");
    } else {
      document.querySelector("html")?.classList.remove("overflow-hidden");
    }
  }, [open]);

  useDebounce(
    async () => {
      setLoading(true);
      const data = await handleSearch(keyword);
      setList(data?.data);
      setLoading(false);
    },
    1000,
    [keyword]
  );

  return (
    <div>
      {/* <div className="fixed w-screen h-screen top-0 left-0 z-20 bg-black/50"></div> */}
      <div
        className={clsx(
          "fixed h-screen transition-all duration-300 w-screen left-0 bg-white z-[100] border-t border-neutral-300",
          {
            "top-[190px] opacity-100 visible": open,
            "top-[250px] opacity-0 invisible": !open,
          }
        )}
      >
        <div className="flex relative items-center w-full h-24">
          <input
            ref={inputSearch}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="absolute border-b border-neutral-300 w-full outline-none font-[playfair] h-full text-center placeholder:text-neutral-400 text-3xl placeholder:text-3xl text-neutral-800 font-medium"
            placeholder="Tìm kiếm sản phẩm"
          />
          <FiX
            onClick={setOpen}
            className="absolute top-6 right-8 text-neutral-700 cursor-pointer hover:text-neutral-500 text-4xl"
          />
        </div>
        <div className="py-6 overflow-y-auto h-[550px]">
          <div className="container mx-auto h-full ">
            {list.length === 0 && !loading ? (
              <p className="text-sm text-neutral-700 text-center">
                Không có thông tin sản phẩm phù hợp
              </p>
            ) : null}

            {loading ? (
              <div className="flex items-center justify-center gap-2 my-4">
                <div aria-label="Loading..." role="status">
                  <svg
                    className="animate-spin w-6 h-6 fill-slate-800"
                    viewBox="3 3 18 18"
                  >
                    <path
                      className="opacity-20"
                      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                    ></path>
                    <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">Vui lòng chờ...</p>
              </div>
            ) : null}

            <div className="grid grid-cols-4 gap-8">
              {list.map((el: any, id: number) => (
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
                  onClick={setOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
