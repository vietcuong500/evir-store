"use client";

import Button from "../button/Button";
import Icon1 from "../../assets/icons/icon1.svg";
import Icon2 from "../../assets/icons/icon2.svg";
import Icon3 from "../../assets/icons/icon3.svg";
import Icon4 from "../../assets/icons/icon4.svg";
import Image from "next/image";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import Link from "next/link";
import clsx from "clsx";

const services = [
  {
    title: "Ullamcorper",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: Icon1,
  },
  {
    title: "Tempor",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: Icon2,
  },
  {
    title: "Dictumst",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: Icon3,
  },
  {
    title: "Consectetur",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: Icon4,
  },
];

const CartItem = (props: any) => {
  const { title, desc, icon, link } = props;
  return (
    <div className="relative">
      <div className="mx-auto w-[100px] h-[100px] rounded-full bg-neutral-100 p-5 absolute left-[50%] -translate-x-[50%] -top-[50px]">
        <Image src={icon} alt={title} height={60} width={60} />
      </div>
      <div className="text-center p-5 pt-16 pb-8 border border-neutral-200">
        <p className="text-lg mb-2">{title}</p>
        <p className="text-sm text-neutral-800">{desc}</p>
      </div>
      <Link
        href={link}
        className={clsx(
          "mx-auto -mt-[18px] w-fit",
          "flex items-center justify-center",
          "px-4 py-2 h-10 whitespace-nowrap hover:bg-green-800 ring-1 ring-transparent transition-all duration-300 active:ring-green-800 focus-visible:ring-green-800 rounded shadow-sm bg-green-600 text-white uppercase font-medium outline-none focus-within:ring-green-900 focus:ring-green-900 text-sm"
        )}
      >
        Xem thêm
      </Link>
    </div>
  );
};

export default function FeatureService() {
  const config: any = useThemeConfig();
  const { service } = config;
  console.log(service)
  return (
    <div className="container mx-auto">
      <div>
        <p className="text-sm text-center font-medium text-green-600">
          {service.sub_title}
        </p>
        <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
          {service.title}
        </p>
        <p className="text-sm text-neutral-800 text-center font-light">
          {service.desc}
        </p>
      </div>
      <div className="mt-24 gap-y-20 xl:gap-y-8 grid grid-cols-2 xl:grid-cols-4 gap-8">
        {service.items.map((el: any, id: number) => (
          <CartItem
            key={id}
            link={el.action}
            title={el.title}
            icon={el.icon}
            desc={el.desc}
          />
        ))}
      </div>
    </div>
  );
}
