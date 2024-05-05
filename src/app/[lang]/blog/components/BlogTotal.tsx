"use client";

import { Select } from "@/components";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import queryString from "query-string";

function BlogTotal(props: any) {
  const { total } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const sort = searchParams.get("sort");
  return (
    <div className="xl:flex items-center justify-between mb-4 hidden ">
      <p className="text-sm font-medium">{total} bài viết</p>
      <div className="flex items-center gap-4">
        <Select
          value={sort}
          onChange={(value: string) => {
            router.push(
              queryString.stringifyUrl({
                url: pathname,
                query: {
                  page,
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

export default BlogTotal;
