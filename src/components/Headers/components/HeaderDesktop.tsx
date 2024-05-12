"use client";

import DrawerCart from "@/app/[lang]/cart/components/DrawerCart";
import Badge from "@/components/badge/Badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import {
  RiPhoneFill,
  RiSearch2Line,
  RiHeart3Line,
  RiShoppingBasket2Line,
} from "react-icons/ri";
import { useToggle } from "react-use";
import { menu } from "../types";
import clsx from "clsx";
import AuthNavigation from "./AuthNavigation";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import Image from "next/image";
import { formatCurrency } from "@/utlis/common";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import SearchHeader from "./SearchHeader";

export default function HeaderDesktop(props: any) {
  const { user, navigation } = props;
  const [open, setOpen] = useToggle(false);

  const [isSearch, setIsSearch] = useToggle(false);

  const router = useRouter();
  const pathname = usePathname();

  const { cart, wishlist } = useAuth();
  const total = cart.reduce(
    (acc: any, curr: any) => curr.quantity * curr.price + acc,
    0
  );

  const config: any = useThemeConfig();
  const { header, lang, dictionary } = config;

  return (
    <>
      <div className="hidden xl:block border-b border-neutral-100">
        <div className="text-sm py-4 container mx-auto grid grid-cols-12">
          <div className="flex items-center gap-8 col-span-4">
            <div className="flex items-center gap-3 text-neutral-800">
              <RiPhoneFill className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-medium">{header.title1}</p>
                <span className="text-neutral-500 font-light">
                  {header.desc1}
                </span>
              </div>
            </div>
            <div>
              <p className="font-medium">{header.title2}</p>
              <span className="text-neutral-500 font-light">
                {header.desc2}
              </span>
            </div>
          </div>

          <div className="col-span-4 justify-center">
            <Link href="/">
              <h1 className="uppercase font-semibold text-lg text-black tracking-wide">
                <Image
                  src="https://www.eviromet.com/files/v1/viewFile/8df0cf72-00a6-4734-aa8b-1527b196d5a6_logo-enviromet.png"
                  alt="eviromet"
                  width={160}
                  height={60}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4 col-span-4 justify-end">
            <AuthNavigation user={user} />
            <RiSearch2Line
              onClick={setIsSearch}
              className="w-5 h-5 hover:text-neutral-500 cursor-pointer"
            />
            <button onClick={() => router.push(`/${lang}/wishlist`)}>
              <Badge count={wishlist?.length}>
                <RiHeart3Line className="w-5 h-5 cursor-pointer hover:text-neutral-500" />
              </Badge>
            </button>

            <button onClick={setOpen}>
              <Badge
                count={cart.reduce(
                  (acc: any, curr: any) => acc + curr.quantity,
                  0
                )}
              >
                <RiShoppingBasket2Line className="w-5 h-5 cursor-pointer hover:text-neutral-500" />
              </Badge>
            </button>

            <span className="text-neutral-700">
              {formatCurrency(total)} VND
            </span>
          </div>
        </div>
      </div>
      <div className="hidden xl:block border-b border-neutral-100">
        <ul className="flex items-center justify-center list-none no-underline gap-4 uppercase text-neutral-600 py-4 text-sm">
          {menu.map((el: any, idx: number) => (
            <li key={idx} className="flex group flex-col">
              <Link
                className="group-hover:text-neutral-900"
                locale="en"
                href={`/${lang}/${el.href}`}
              >
                {dictionary.navigation[el.title]}
              </Link>
              <span
                className={clsx({
                  "inline-block h-[1px] w-0 transition-all duration-200 group-hover:w-full bg-green-600":
                    true,
                  "bg-green-600 w-full":
                    (idx !== 0 && pathname.includes(el.href)) ||
                    pathname === el.href,
                })}
              ></span>
            </li>
          ))}
          {navigation
            .filter((el: any) => el.status === "ACTIVE")
            .map((el: any) => ({
              title: el.title,
              href: `${el.slug}?page=${el.id}`,
            }))
            .map((el: any, idx: number) => (
              <li key={idx} className="flex group flex-col">
                <Link
                  className="group-hover:text-neutral-900"
                  href={`/${lang}/${el.href}`}
                >
                  {el.title}
                </Link>
                <span
                  className={clsx({
                    "inline-block h-[1px] w-0 transition-all duration-200 group-hover:w-full bg-green-600":
                      true,
                    "bg-green-600 w-full":
                      (idx !== 0 && pathname.includes(el.href)) ||
                      pathname === el.href,
                  })}
                ></span>
              </li>
            ))}
        </ul>
      </div>

      <DrawerCart open={open} setOpen={setOpen} />
      <SearchHeader open={isSearch} setOpen={setIsSearch} />
    </>
  );
}
