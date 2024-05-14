"use client";

import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import Image from "next/image";

export default function CustomerSay() {
  const config: any = useThemeConfig();
  const { customer_say } = config;
  return (
    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 my-8">
      <div className="mx-auto text-center">
        <p className="text-sm text-center font-medium text-[#8d765a]">
          {customer_say.sub_title}
        </p>
        <p className="text-xl relative uppercase text-neutral-800 font-medium text-center mb-8 mt-4">
          {customer_say.title}
          <span className="absolute block w-14 h-1 bg-[#695e4c] left-[50%] -translate-x-[50%] mt-2"></span>
        </p>
        <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden bg-neutral-200 mb-3">
          <Image
            width={100}
            height={100}
            alt="avatar"
            src={customer_say.avatar}
          />
        </div>
        <p className="text-sm text-neutral-900">{customer_say.desc}</p>
        <p className="text-sm mt-4">
          <span className="font-semibold">{customer_say.name}</span>
          <span className="text-neutral-700"> - {customer_say.status}</span>
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 relative">
        {/* <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div> */}
        {customer_say.images.map((el: any, id: number) => (
          <div key={id} className="bg-neutral-100 w-full h-full">
            {el.link ? (
              <img
                src={el.link}
                alt={el.link}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
        ))}
        <div className="absolute w-[300px] text-center h-[220px] bg-white shadow left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] p-5 flex flex-col items-center justify-center">
          <p className="uppercase">{customer_say.social.name}</p>
          <p className="text-sm text-neutral-500 mt-1">
            {customer_say.social.account}
          </p>
          <p className="text-sm text-neutral-900 mt-3">
            {customer_say.social.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
