"use client";

import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  const config: any = useThemeConfig();
  const { hero } = config;
  return (
    <div className="mt-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 h-auto">
        <div className="grow w-full lg:w-1/2 h-[26rem] bg-neutral-100 p-8 relative">
          <div className="relative z-10">
            <p className="mb-6 uppercase text-green-600 text-sm">
              {hero[0].sub_title}
            </p>
            <h3 className="text-4xl text-neutral-900 capitalize w-1/4 font-[playfair]">
              {hero[0].title}
            </h3>
            <Link
              className="uppercase hover:text-neutral-900 border-b border-green-500 text-sm text-neutral-800 font-medium mt-4 inline-block"
              href={hero[0].link}
            >
              read more
            </Link>
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            {hero[0].image ? (
              <img src={hero[0].image} className="w-full h-full object-cover" />
            ) : null}
          </div>
        </div>
        <div className="grow w-full lg:w-1/2 h-[26rem] flex flex-col gap-y-8">
          <div className="h-1/2 w-full relative bg-neutral-100 p-5">
            <div className="relative z-10">
              <p className="mb-4 uppercase text-green-600 text-sm">
                {hero[1].sub_title}
              </p>
              <h3 className="text-2xl text-neutral-900 capitalize w-1/3 font-[playfair]">
                {hero[1].title}
              </h3>
              <Link
                className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
                href={hero[1].link}
              >
                read more
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              {hero[1].image ? (
                <img
                  src={hero[1].image}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
          </div>
          <div className="flex items-stretch w-full h-1/2 gap-8">
            <div className="w-full relative h-full bg-neutral-100 p-5">
              <div className="relative z-10">
                <p className="mb-4 uppercase text-green-600 text-sm">
                  {hero[2].sub_title}
                </p>
                <h3 className="text-2xl text-neutral-900 capitalize w-1/2 font-[playfair]">
                  {hero[2].title}
                </h3>
                <Link
                  className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
                  href={hero[2].link}
                >
                  read more
                </Link>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                {hero[2].image ? (
                  <img
                    src={hero[2].image}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
            </div>
            {/* <div className="w-1/3 h-full bg-neutral-100">
              {hero[3].image ? (
                <img
                  src={hero[3].image}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
