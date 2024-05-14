"use client";

import { Drawer, Select } from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { useToggle } from "react-use";
import queryString from "query-string";
import ProductCategories from "@/contains/shop/ProductCategories";
import { ProductRecommend } from "@/contains/shop/ProductsRecommend";
import SeacrhProduct from "./SearchProduct";

export default function FilterMobile(props: any) {
  const { category, data } = props;
  const [open, setOpen] = useToggle(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const collection = searchParams.get("collection");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");
  const router = useRouter();
  return (
    <>
      <div className="lg:hidden mb-4 flex items-center justify-between">
        <button
          onClick={setOpen}
          className="flex items-center gap-2 font-medium uppercase mb-4 text-sm"
        >
          <FiMenu />
          Bộ lọc
        </button>

        <Select
          value={sort}
          onChange={(value: string) => {
            router.push(
              queryString.stringifyUrl({
                url: pathname,
                query: {
                  page,
                  collection,
                  sort: value,
                },
              })
            );
          }}
          options={[
            {
              label: "Thứ tự chữ cái A-Z",
              value: "az",
            },
            {
              label: "Thứ tự chữ cái Z-A",
              value: "za",
            },
            {
              label: "Giá tăng dần",
              value: "tang",
            },
            {
              label: "Giá giảm dần",
              value: "giam",
            },
          ]}
        />
      </div>
      <Drawer placement="left" open={open} setOpen={setOpen}>
        <div className="px-5 py-4">
          <SeacrhProduct />
          <div className="w-full my-6 h-[1px] bg-neutral-300"></div>
          <ProductCategories data={category.data} value={category.value} />
          <div className="w-full my-6 h-[1px] bg-neutral-300"></div>
          <ProductRecommend data={data} />
          <div className="w-full my-6 h-[1px] bg-neutral-300"></div>
          <div className="w-full h-52 bg-neutral-100">
            <div className="p-5">
              <p className="uppercase text-[#584f3f] mb-2">semper erat</p>
              <p className="text-xl capitalize text-neutral-900">
                Condim Sceleris Impertas Parturient
              </p>
              <button className="px-2 py-1 bg-emerald-500 mt-4 text-white text-xs rounded-sm uppercase">
                view more
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
