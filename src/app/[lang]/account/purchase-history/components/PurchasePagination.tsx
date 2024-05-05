"use client"

import { Pagination } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import queryString from "query-string";

export default function PurchasePagination(props: any) {
  const pathname = usePathname();
  const { query, total, page } = props;
  const router = useRouter();
  return (
    <Pagination
      className="mt-4 justify-center"
      onPageChange={(value: any) => {
        router.push(
          queryString.stringifyUrl({
            url: pathname,
            query: {
              ...query,
              page: value,
            },
          })
        );
      }}
      totalCount={total}
      currentPage={Number(page) || 1}
      pageSize={5}
    />
  );
}
