"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductCategoriesItem } from "./ProductCategoriesItem";
import queryString from "query-string";

export default function ProductCategories(props: any) {
  const { value, query, data } = props;
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      <p className="text-2xl font-medium text-neutral-900 font-[playfair]">
        Danh mục
      </p>
      <div className="mt-4 flex flex-col gap-3">
        {data?.map((el: any, id: number) => (
          <ProductCategoriesItem
            active={el.value == value}
            key={id}
            title={el.title}
            slug={el.slug}
            value={el.count}
            onClick={(value: string) => {
              router.push(
                queryString.stringifyUrl({
                  url: pathname,
                  query: {
                    ...query,
                    collection: el.value,
                  },
                })
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}
