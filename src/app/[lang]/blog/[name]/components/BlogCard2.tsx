"use client";

import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import queryString from "query-string";

export default function BlogCard2(props: any) {
  const { name, create_at, src, id } = props;
  const router = useRouter();
  const { lang } = useThemeConfig();
  const url = queryString.stringifyUrl({
    url: `/${lang}/blog/` + name,
    query: {
      blog_id: id,
    },
  });
  return (
    <div className="flex items-stretch gap-4">
      <div
        onClick={() => {
          router.push(url);
        }}
        className="w-20 h-14 bg-neutral-100 shrink-0 cursor-pointer"
      >
        <Image src={src} alt={name} height={56} width={80} />
      </div>
      <div className="flex flex-col justify-between">
        <p
          onClick={() => {
            router.push(url);
          }}
          className="text-sm text-neutral-950 line-clamp-2 hover:text-lime-800 cursor-pointer"
        >
          {name}
        </p>
        <div className="flex items-center justify-between text-xs">
          <p className="text-xs text-neutral-700">
            {moment(create_at).format("DD/MM/YYYY")}
          </p>
          <p className="text-neutral-500">Chưa có bình luận</p>
        </div>
      </div>
    </div>
  );
}
