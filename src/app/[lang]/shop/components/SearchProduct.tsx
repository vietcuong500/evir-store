"use client";

import { revalidatePath } from "next/cache";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SeacrhProduct(props: any) {
  const [keyword, setKeyword] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <form
      onSubmit={(e) => {
    e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set("keyword", keyword);
        params.set("page", '1')
        router.push(`${pathname}?${params}`);
      }}
      className="relative"
    >
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        name="keyword"
        placeholder="Tìm kiếm"
        className="h-9 translate-x-0 duration-400 outline-none ring-1 ring-transparent hover:ring-lime-600 focus:ring-lime-600 border border-neutral-200 text-sm px-4 placeholder:text-neutral-700 pl-8 rounded w-full"
      />
      <FiSearch className="absolute left-3 top-2 text-neutral-600" />
    </form>
  );
}
