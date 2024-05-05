"use client";

import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import clsx from "clsx";
import Link from "next/link";

export default function Breadcrumb(props: any) {
  const { list, className } = props;
  const {lang} = useThemeConfig()
  return (
    <div
      className={` flex items-center gap-2 text-sm text-neutral-700 capitalize ${className} `}
    >
      {list.map((el: any, id: number) => (
        <div key={id}>
          <Link
            className={clsx({
              "hover:text-green-800 inline-block mr-2": true,
              "font-semibold": el.active,
            })}
            href={`/${lang}/${el.href}`}
          >
            {el.title}
          </Link>
          {id !== list.length - 1 ? <span>/</span> : null}
        </div>
      ))}
    </div>
  );
}
