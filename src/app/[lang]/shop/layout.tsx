"use client";

import { Breadcrumb, NewsLetter } from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ShopLayout(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const collection = searchParams.get("collection");
  const sort = searchParams.get("sort");
  return (
    <div>
      <div className="bg-neutral-100 ">
        <div className="relative">
          <div className="relative h-40 z-10 py-6 text-center container mx-auto flex flex-col justify-center items-center">
            <p className="text-3xl text-center text-zinc-900 font-[playfair]">
              Sản phẩm
            </p>
            <Breadcrumb
              className="justify-center mt-2 "
              list={[
                { title: "Trang chủ", href: "/" },
                { title: "Sản phẩm", href: "/shop?page=1&page_size=12" },
              ]}
            />
          </div>
          {/* <Image
            src="/bg-2.jpg"
            width={0}
            height={0}
            sizes="100vw"
            objectPosition="center"
            style={{
              width: "100%",
              height: "100%",
              objectPosition: "center",
              transition: "all 300ms",
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
              OObjectPosition: "center"
            }}
            alt="banner"
          />
          <div className="absolute w-full h-full z-[5] bg-neutral-900 opacity-60 left-0 top-0"></div> */}
        </div>
      </div>
      {props.children}
      <NewsLetter />
    </div>
  );
}
