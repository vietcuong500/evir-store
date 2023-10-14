"use client";

import Link from "next/link";
import {
  RiPhoneFill,
  RiSearch2Line,
  RiHeart3Line,
  RiShoppingBasket2Line,
} from "react-icons/ri";
import { MdMenu, MdOutlineSearch } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";

export default function Header() {
  return (
    <div className="">
      <div className="bg-emerald-600 text-white">
        <div className="hidden container mx-auto h-10 text-xs xl:flex items-center justify-between">
          <div className="h-full flex items-center">
            <p className="h-full leading-10 px-4 border-l border-neutral-100/50 cursor-pointer">
              VIETNAM
            </p>
            <p className="h-full leading-10 px-4 border-l border-neutral-100/50">
              FREE SHIPPING FOR ALL ORDERS OF $150
            </p>
          </div>

          <div className="h-full flex items-center">
            <ul className="px-4 flex h-full items-center gap-3 border-r border-neutral-100/50">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
            <p className="h-full uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
              newsletter
            </p>
            <p className="h-full uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
              contact us
            </p>
            <p className="h-full uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
              faqs
            </p>
          </div>
        </div>
        <div className="flex xl:hidden h-10">
          <ul className="px-4 flex h-full items-center gap-3 justify-center w-full">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
      <HeaderDesktop />
      <HeaderMobile />
     
    </div>
  );
}
