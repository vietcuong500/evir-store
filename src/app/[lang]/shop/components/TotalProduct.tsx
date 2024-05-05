"use client";

import { Select } from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdGridOn, MdGridView } from "react-icons/md";
import queryString from "query-string";

export default function TotalProduct(props: any) {
  const { total } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const collection = searchParams.get("collection");
  const sort = searchParams.get("sort");
  return (
    <div className="xl:flex items-center justify-between mb-4 hidden ">
      <p className="text-sm font-medium">{total} sản phảm</p>
      <div className="flex items-center gap-4">
        {/* <div className="flex items-center">
          <button className="w-8 h-8 rounded-full flex-center">
            <MdGridView className="text-xl text-neutral-500 hover:text-neutral-700" />
          </button>
          <button className="w-8 h-8 rounded-full flex-center">
            <MdGridOn className="text-xl text-neutral-500 hover:text-neutral-700" />
          </button>
        </div> */}
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
    </div>
  );
}
