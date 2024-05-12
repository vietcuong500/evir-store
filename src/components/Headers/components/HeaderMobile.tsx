"use client";

import { useToggle } from "react-use";
import { MdMenu } from "react-icons/md";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import Link from "next/link";
import Badge from "@/components/badge/Badge";
import { Tooltip } from "@/components";
import DrawerSidebar from "./DrawerSidebar";
import DrawerCart from "@/app/[lang]/cart/components/DrawerCart";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { useEffect, useState } from "react";

const IconBottom = (props: any) => {
  const { icon, title, count, href } = props;
  const router = useRouter();
  return (
    <Tooltip title={title}>
      <ul
        className="flex flex-col items-center justify-center"
        onClick={() => router.push(href)}
      >
        <Badge count={count}>{icon}</Badge>
        <p className="text-neutral-700 text-xs mt-1">{title}</p>
      </ul>
    </Tooltip>
  );
};

export default function HeaderMobile(props: any) {
  const [open, setOpen] = useToggle(false);
  const { user, navigation } = props;

  const { cart, wishlist } = useAuth();

  const [openCart, setOpenCart] = useToggle(false);

  const [menu, setMenu] = useState([
    {
      icon: <MdOutlineStorefront className="text-xl text-neutral-600" />,
      title: "Cửa hàng",
      href: "/shop",
    },
    {
      icon: <FiHeart className="text-xl text-neutral-600" />,
      title: "Yêu thích",
      count: 7,
      href: "/wishlist",
    },
    {
      icon: <FiShoppingBag className="text-xl text-neutral-600" />,
      title: "Giỏ hàng",
      count: 2,
      href: "/cart",
    },
    {
      icon: <FiUser className="text-xl text-neutral-600" />,
      title: "Tài khoản",
      href: "/account",
    },
  ]);

  const totalCart = cart.reduce(
    (acc: any, curr: any) => acc + curr.quantity,
    0
  );
  const totalWishlist = wishlist.reduce(
    (acc: any, curr: any) => acc + curr.quantity,
    0
  );

  useEffect(() => {
    setMenu([
      {
        icon: <MdOutlineStorefront className="text-xl text-neutral-600" />,
        title: "Cửa hàng",
        href: "/shop",
      },
      {
        icon: <FiHeart className="text-xl text-neutral-600" />,
        title: "Yêu thích",
        count: totalWishlist,
        href: "/wishlist",
      },
      {
        icon: <FiShoppingBag className="text-xl text-neutral-600" />,
        title: "Giỏ hàng",
        count: totalCart,
        href: "/cart",
      },
      {
        icon: <FiUser className="text-xl text-neutral-600" />,
        title: "Tài khoản",
        href: "/account",
      },
    ]);
  }, [totalCart, totalWishlist]);

  return (
    <>
      <div className="border-b border-neutral-200">
        <div className="flex xl:hidden container mx-auto py-4  items-center justify-between">
          <div
            onClick={setOpen}
            className="flex items-center gap-2 cursor-pointer"
          >
            <MdMenu />
            <p className="uppercase text-neutral-800">menu</p>
          </div>
          <Link href="/" className="block -ml-[40px]">
            <h1 className="uppercase font-semibold text-lg text-black tracking-wide">
              <Image
                src="https://www.eviromet.com/files/v1/viewFile/8df0cf72-00a6-4734-aa8b-1527b196d5a6_logo-enviromet.png"
                alt="eviromet"
                width={160}
                height={60}
              />
            </h1>
          </Link>
          <div className="">
            <Tooltip title="cart">
              <Badge count={3}>
                <RiShoppingBasket2Line
                  onClick={setOpenCart}
                  className="w-5 h-5 cursor-pointer"
                />
              </Badge>
            </Tooltip>
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
              href={el.href}
            />
          ))}
        </ul>
      </div>

      <DrawerSidebar navigation={navigation} user={user} open={open} setOpen={setOpen} />
      <DrawerCart open={openCart} setOpen={setOpenCart} />
    </>
  );
}
