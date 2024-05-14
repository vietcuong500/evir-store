"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CollectionCart(props: any) {
  const { name, count, image, link } = props;
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      className="w-full h-56 bg-neutral-100 relative justify-center group cursor-pointer group hover:bg-neutral-400 transition-all duration-100"
    >
      <div className="absolute w-full h-full position-center z-20">
        <p className="transition-all duration-300 uppercase position-center scale-100 group-hover:scale-0 rounded shadow text-white bg-[#8d765a] px-4 py-3">
          {name}
        </p>
        <Link
          href={link}
          className="position-center uppercase text-sm transition-all duration-300 scale-0 group-hover:scale-100 text-white"
        >
          {count} sản phẩm
        </Link>
      </div>
      <div className="absolute w-full h-full top-0 left-0 group-hover:opacity-100 opacity-0 bg-neutral-900/50 z-10"></div>
      <div className="absolute w-full h-full">
        {image ? (
          <Image
            src={image}
            alt={name}
            sizes="100vw"
            fill={true}
            objectFit="cover"
          />
        ) : null}
      </div>
    </div>
  );
}
