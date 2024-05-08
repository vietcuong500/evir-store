"use client";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { getDictionary } from "@/lib/dictionary";
import { useRouter } from "next/navigation";
import { cache, use } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import SelectLanguage from "./components/SelectLanguage";

export default function Header(props: any) {
  const { user, navigation } = props;
  const { lang, dictionary, top } = useThemeConfig();
  const router = useRouter();
  return (
    <div className="">
      <div className="bg-emerald-600 text-white">
        <div className="hidden text-white container mx-auto h-10 text-xs xl:flex items-center justify-between">
          <div className="h-full flex items-center">
            {/* <p className="h-full text-white leading-10 px-4 border-l border-neutral-100/50 cursor-pointer">
              VIETNAM
            </p> */}
            
            <p className="h-full text-white leading-10 px-4 border-l border-neutral-100/50">
              {top.shipping}
            </p>
          </div>

          <div className="h-full flex items-center">
            <ul className="px-4 text-white flex h-full items-center gap-3 border-r border-neutral-100/50">
              <li className="cursor-pointer" onClick={() => window.open(top.fb_link, '_blank')}>
                <FaFacebookF />
              </li>
              {/* <li className="cursor-pointer" onClick={() => window.open(top.tw_link, '_blank')}>
                <FaTwitter />
              </li> */}
              <li className="cursor-pointer" onClick={() => window.open(top.ins_link, '_blank')}>
                <FaInstagram />
              </li>
              {/* <li className="cursor-pointer" onClick={() => window.open(top.yt_link, '_blank')}>
                <FaYoutube />
              </li> */}
            </ul>
            <p onClick={() => window.open(top.newsletter_link, '_blank')} className="h-full text-white uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
              newsletter
            </p>
            {/* <p onClick={() => window.open(top.contact_link, '_blank')} className="h-full text-white uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
              Liên hệ
            </p> */}
            <p onClick={() => window.open(top.faqs_link, '_blank')} className="h-full text-white uppercase leading-10 px-4 border-r border-neutral-100/50 cursor-pointer">
              faqs
            </p>
            <SelectLanguage />
          </div>
        </div>
        <div className="flex xl:hidden h-10">
          <ul className="container text-white mx-auto flex h-full items-center gap-3 justify-center">
          <li className="cursor-pointer" onClick={() => window.open(top.fb_link, '_blank')}>
                <FaFacebookF />
              </li>
              <li className="cursor-pointer" onClick={() => window.open(top.tw_link, '_blank')}>
                <FaTwitter />
              </li>
              <li className="cursor-pointer" onClick={() => window.open(top.ins_link, '_blank')}>
                <FaInstagram />
              </li>
              <li className="cursor-pointer" onClick={() => window.open(top.yt_link, '_blank')}>
                <FaYoutube />
              </li>
          </ul>
        </div>
      </div>
      <HeaderDesktop navigation={navigation} user={user} />
      <HeaderMobile navigation={navigation} user={user} />
    </div>
  );
}
