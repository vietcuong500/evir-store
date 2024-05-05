"use client";

import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function LogoutButton(props: any) {
  const router = useRouter();
  const {lang} = useThemeConfig()
  return (
    <li
      onClick={() => {
        router.push(`/${lang}/login`);
        deleteCookie("token");
        deleteCookie("user_id");
        router.refresh();
      }}
      className="-mx-3 px-3 py-2 block text-sm cursor-pointer hover:bg-neutral-100"
    >
      Đăng xuất
    </li>
  );
}
