"use client";

import Drawer from "@/components/drawer/Drawer";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";

export default function DrawerSidebar(props: any) {
  const { open, setOpen, user, navigation } = props;
  const router = useRouter();
  const config: any = useThemeConfig();
  const { lang } = config;

  return (
    <Drawer placement="left" open={open} setOpen={setOpen}>
      <div className="h-10 border-b border-neutral-200 text-sm w-full flex items-center justify-between text-neutral-700 font-medium uppercase px-5 py-3">
        <p>Menu</p>
        <MdClose
          onClick={setOpen}
          className="cursor-pointer text-neutral-900"
        />
      </div>
      <ul className="uppercase text-neutral-700 font-medium text-sm">
        <li
          onClick={() => {
            router.push(`/${lang}`);
            setOpen();
          }}
          className="px-5 py-3 border-b border-neutral-200 cursor-pointer"
        >
          <span>Trang chủ</span>
        </li>
        <li
          onClick={() => {
            router.push(lang + "/shop?page=1&page_size=12");
            setOpen();
          }}
          className="px-5 py-3 border-b border-neutral-200 cursor-pointer"
        >
          <span>Cửa hàng</span>
        </li>
        <li
          onClick={() => {
            router.push(lang + "/blog?page=1&page_size=9");
            setOpen();
          }}
          className="px-5 py-3 border-b border-neutral-200 cursor-pointer"
        >
          <span>Bài viết</span>
        </li>
        {navigation
          .filter((el: any) => el.status === "ACTIVE")
          .map((el: any) => ({
            title: el.title,
            href: `${lang}/${el.slug}?page=${el.id}`,
          }))
          .map((el: any, idx: number) => (
            <li
              key={idx}
              onClick={() => {
                router.push(el.href);
                setOpen();
              }}
              className="px-5 py-3 border-b border-neutral-200 cursor-pointer"
            >
              <span>{el.title}</span>
            </li>
          ))}
        <li className="px-5 py-3 border-b border-neutral-200">
          {user ? (
            <span
              className="cursor-pointer"
              onClick={() => {
                router.push(lang + "/account");
                setOpen();
              }}
            >
              {user.username}
            </span>
          ) : (
            <>
              <span
                onClick={() => {
                  router.push(lang + "/login");
                  setOpen();
                }}
              >
                Đăng nhập
              </span>
              /
              <span
                onClick={() => {
                  router.push(lang + "/register");
                  setOpen();
                }}
              >
                Đăng ký
              </span>
            </>
          )}
        </li>
      </ul>
    </Drawer>
  );
}
