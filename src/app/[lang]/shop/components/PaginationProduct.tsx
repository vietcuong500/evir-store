"use client";

import { Pagination } from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

function PaginationProduct(props: any) {
  const { total, pageSize } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;
  const collection = searchParams.get("collection");
  const sort = searchParams.get("sort");
  return (
    <Pagination
      className="mt-4 justify-center"
      onPageChange={(value: any) => {
        router.push(
          queryString.stringifyUrl({
            url: pathname,
            query: {
              page: value,
              collection,
              sort,
            },
          })
        );
      }}
      totalCount={total}
      currentPage={Number(page) || 1}
      pageSize={pageSize}
    />
  );
}

export default PaginationProduct;
