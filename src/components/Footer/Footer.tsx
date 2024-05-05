"use client";

import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiSmartphone, FiMail } from "react-icons/fi";

export default function Footer(props: any) {
  const { config, data } = props;
  const { footer } = config;
  const { lang } = useThemeConfig();
  const router = useRouter();

  return (
    <div className="py-8">
      <div className="container mx-auto flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 flex flex-col md:flex-row  gap-6">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl font-semibold text-lime-700">Eviromet.</h4>
            <p className="text-neutral-700 mt-2 mb-4 text-sm">{footer.desc}</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-neutral-800">
                <CiLocationArrow1 />
                {footer.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-800">
                <FiSmartphone />
                {footer.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-800">
                <FiMail /> {footer.fax}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <p className="uppercase font-medium text-neutral-950">
              Bài viết gần đây
            </p>
            <div className="flex flex-col gap-6 mt-4">
              {data.map((el: any, id: number) => (
                <div
                  onClick={() => {
                    const url = queryString.stringifyUrl({
                      url: `/${lang}/blog/` + el.name,
                      query: {
                        blog_id: el.id,
                      },
                    });
                    router.push(url);
                  }}
                  key={id}
                  className="flex items-stretch gap-4"
                >
                  <div className="w-20 h-14 bg-neutral-100">
                    {el.avatar ? (
                      <img
                        className="w-full h-full object-cover"
                        alt={el.title}
                        src={el.avatar}
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-sm cursor-pointer line-clamp-2 text-neutral-950 hover:text-lime-700">
                      {el.title}
                    </p>
                    <p className="text-xs text-neutral-700">
                      {moment(el.created_at).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex gap-6">
          <div className="w-1/3">
            <p className="uppercase font-medium text-neutral-950">
              {footer.col1.title}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footer.col1.menu.map((el: any, id: number) => (
                <li
                  className="text-sm text-neutral-600 hover:text-neutral-950"
                  key={id}
                >
                  <Link key={id} href={el.link}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3">
            <p className="uppercase font-medium text-neutral-950">
              {footer.col2.title}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footer.col2.menu.map((el: any, id: number) => (
                <li
                  className="text-sm text-neutral-600 hover:text-neutral-950"
                  key={id}
                >
                  <Link key={id} href={el.link}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3">
            <p className="uppercase font-medium text-neutral-950">
              {footer.col3.title}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footer.col3.menu.map((el: any, id: number) => (
                <li
                  className="text-sm text-neutral-600 hover:text-neutral-950"
                  key={id}
                >
                  <Link key={id} href={el.link}>
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
