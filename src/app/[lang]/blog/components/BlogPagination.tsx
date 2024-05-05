"use client";
import { Pagination } from "@/components";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import queryString from "query-string";

function BlogPagination(props: any) {
  const { total, pageSize } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;
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
              // sort,
            },
          })
        );
      }}
      totalCount={total}
      currentPage={Number(page)}
      pageSize={pageSize || 9}
    />
  );
}

export default BlogPagination;
