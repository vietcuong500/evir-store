"use client";

import Image from "next/image";
import { Button, Input } from "@/components";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { FiMail } from "react-icons/fi";
import coverImg from "../../../public/image/cover.jpg";

export default function NewsLetter(props: any) {
  const { lang, dictionary } = useThemeConfig();

  const getHeyYouTextTitle = () => {
    if(lang == 'vi'){
      return 'Nhận tin mới nhất từ EVIROMET';
    } 

    return 'Receive the latest news from EVIROMET';
  }

  const getHeyYouTextBody = () => {
    if(lang == 'vi'){
      return 'Đăng kí ngay để nhận thông tin mới nhất về sản phẩm, khuyến mãi, sự kiện ... từ';
    }

    return 'Register now to receive the latest information about products, promotions, events... from';
  }

  const getTextPlaceHolderEmail = () => {
    if(lang == 'vi'){
      return 'Nhập email của bạn';
    }

    return 'Enter your email'
  }

  return (
    <div className="bg-neutral-50 relative h-56">
      <div className="absolute w-full h-full top-0 left-0">
        <Image
          src={coverImg}
          alt="banner"
          priority={true}
          sizes="100vw"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="w-full bg-neutral-700/10 h-full left-0 top-0 z-10 absolute">
        <div className="container py-6 xl:py-0 h-full mx-auto flex flex-col xl:flex-row items-center justify-center xl:justify-between">
          <div className="text-center xl:text-left">
            <p className="uppercase text-[#8d765a] text-sm">
              {getHeyYouTextTitle()}
            </p>
            <p className="text-2xl mt-0 xl:mt-4 font-medium text-neutral-800">
              {getHeyYouTextBody()}{" "}
              <span className="text-[#695e4c]">EVIROMET!</span>
            </p>
          </div>
          <div className="flex mt-4 xl:mt-0 items-stretch gap-4">
            <Input iconStart={<FiMail className="text-neutral-600"  />} placeholder={getTextPlaceHolderEmail()} />
            <a href={`/${lang}/login`}><Button>Sign up</Button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
