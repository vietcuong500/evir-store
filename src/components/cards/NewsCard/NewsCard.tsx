"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineMarkChatUnread, MdStarBorder } from "react-icons/md";
import queryString from "query-string";
import moment from "moment";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";

export default function NewsCard(props: any) {
  const {
    title,
    category,
    content,
    id,
    summary,
    createAt,
    newer,
    older,
    avatar,
  } = props;
  const router = useRouter();
  const { lang } = useThemeConfig();
  const url = queryString.stringifyUrl({
    url: `/${lang}/blog/` + title,
    query: {
      blog_id: id,
    },
  });
  return (
    <div className="w-full">
      <div className="w-full h-56 group relative">
        <div
          onClick={() => {
            router.push(url);
          }}
          className="w-full h-full z-10 absolute left-0 top-0 bg-neutral-900/50 cursor-pointer"
        ></div>
        <p className="absolute bg-white z-10 rounded-sm top-4 left-4 w-14 h-16 flex items-center justify-center flex-col uppercase text-lg">
          <span>{moment(createAt).day()}</span>
          <span className="text-sm">T{moment(createAt).month()}</span>
        </p>
        <div className="w-full h-full cursor-pointer overflow-hidden group-hover:[&>img]:scale-125">
          <Image
            src={avatar ? avatar : "/blog-post-hand-made-3.jpg"}
            alt="blog"
            width={0}
            height={0}
            sizes="100vw"
            objectFit="cover"
            style={{
              width: "100%",
              height: "100%",
              objectPosition: "center",
              transition: "all 300ms",
            }}
          />
        </div>
        <div className="absolute whitespace-nowrap z-20 cursor-pointer bg-[#584f3f] text-white uppercase text-xs px-4 py-2 rounded-sm font-semibold -bottom-4 h-8 left-[50%] -translate-x-[50%]">
          {category}
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-base">{title}</p>
        <div className="flex items-center gap-2 justify-center my-2">
          <MdStarBorder className="w-4 h-4" />
          <MdOutlineMarkChatUnread className="w-4 h-4" />
          <FiShare2 className="w-4 h-4" />
        </div>
        <p className="text-sm text-neutral-700 line-clamp-3">{summary}</p>
        <Link
          href={url}
          className="text-sm transition-all duration-200 uppercase text-[#584f3f] hover:text-emerald-950"
        >
          Đọc tiếp
        </Link>
      </div>
    </div>
  );
}
