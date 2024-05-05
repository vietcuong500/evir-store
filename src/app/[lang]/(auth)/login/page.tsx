"use client";

import { Button } from "@/components";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { useRouter } from "next/navigation";

import FormLogin from "./components/FormLogin";

export default function LoginPage() {
  const router = useRouter();
  const { lang } = useThemeConfig();

  return (
    <div className="container mx-auto flex flex-col lg:flex-row py-10 gap-16">
      <div className="w-full lg:w-1/2">
        <p className="uppercase font-medium text-xl mt-6 h-14 font-[playfair]">Đăng nhập</p>
        <FormLogin />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col border-l border-neutral-200 pl-16">
        <p className="uppercase font-medium text-xl text-center h-14 font-[playfair]">Đăng ký</p>
        <p className="text-sm mt-4 text-neutral-700 text-center">
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and get a new account set up
          for you in no time. We will only ask you for information necessary to
          make the purchase process faster and easier.
        </p>
        <button
          className="w-fit self-center mt-6 h-9 bg-neutral-200 px-6 hover:bg-neutral-300 text-sm rounded-sm uppercase"
          onClick={() => router.push(`/${lang}/register`)}
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
}
