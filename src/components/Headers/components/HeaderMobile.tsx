"use client";

import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { MdMenu } from "react-icons/md";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import Link from "next/link";
import Badge from "@/components/badge/Badge";

const IconBottom = (props: any) => {
  const { icon, title, count } = props;
  return (
    <ul className="flex flex-col items-center justify-center">
      <Badge count={count}>{icon}</Badge>
      <p className="text-neutral-700 text-xs mt-1">{title}</p>
    </ul>
  );
};

const menu = [
  {
    icon: <MdOutlineStorefront className="text-xl text-neutral-600" />,
    title: "Shop",
  },
  {
    icon: <FiHeart className="text-xl text-neutral-600" />,
    title: "Wishlist",
    count: 7,
  },
  {
    icon: <FiShoppingBag className="text-xl text-neutral-600" />,
    title: "Cart",
    count: 2,
  },
  {
    icon: <FiUser className="text-xl text-neutral-600" />,
    title: "My Account",
  },
];

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const menuMobile = useRef(null);

  useClickAway(menuMobile, () => {
    if (open) toggle();
  });
  return (
    <>
      <div className="border-b border-neutral-200">
        <div className="flex xl:hidden container mx-auto py-4  items-center justify-between">
          <div
            onClick={toggle}
            className="flex items-center gap-2 cursor-pointer"
          >
            <MdMenu />
            <p className="uppercase text-neutral-800">menu</p>
          </div>
          <Link href="/">
            <h1 className="uppercase font-semibold text-lg text-black tracking-wide">
              woodmart
            </h1>
          </Link>
          <div>
            <RiShoppingBasket2Line className="w-5 h-5" />
          </div>

          <div
            className={`transition-all duration-500 fixed ${
              open ? "bg-neutral-900/50 z-[100]" : "bg-transparent -z-10"
            } w-screen h-screen left-0 top-0`}
          >
            <div
              ref={menuMobile}
              className={`bg-white transition-all duration-500 w-3/4 md:w-1/3 h-full relative top-0 ${
                open ? "left-0" : "-left-full"
              }`}
            >
              {/* <div className="flex w-full justify-between">
            <input placeholder="Tìm kiếm" className="grow px-5 py-3"  />
            <MdOutlineSearch/>
          </div> */}
              <ul className="uppercase text-neutral-700 font-medium text-sm">
                <li className="px-5 py-3 border-b border-neutral-200">
                  <Link href="/">home</Link>
                </li>
                <li className="px-5 py-3 border-b border-neutral-200">
                  <Link href="/">Collection</Link>
                </li>
                <li className="px-5 py-3 border-b border-neutral-200">
                  <Link href="/">Blog</Link>
                </li>
                <li className="px-5 py-3 border-b border-neutral-200">
                  <Link href="/">Store</Link>
                </li>
                <li className="px-5 py-3 border-b border-neutral-200">
                  <Link href="/">Page</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed xl:hidden w-screen bg-white bottom-0 left-0 py-2 shadow-top z-[70]">
        <ul className="container mx-auto flex items-center justify-around">
          {menu.map((el: any, id: number) => (
            <IconBottom
              key={id}
              icon={el.icon}
              title={el.title}
              count={el.count}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
