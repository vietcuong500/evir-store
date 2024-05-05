import Image from "next/image";

export default function NewsCard2() {
  return (
    <div className="w-full h-44 relative">
      <div className="absolute w-full h-full top-0 left-0 bg-neutral-900/50"></div>
      <div className="w-full h-full">
        <Image
          src="/blog-post-hand-made-3.jpg"
          alt="blog"
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          style={{
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }} // optional
        />
      </div>
      <div className="w-full h-full absolute left-0 top-0 px-5 py-4 flex flex-col justify-end">
        <div className="w-fit cursor-pointer bg-white text-black uppercase text-xs px-4 py-2 rounded-sm font-semibold">
          Accessories
        </div>
        <p className="text-white font-medium mt-4 w-2/3">
          Ac haca ullamcorper donec ante habi tasse donec
        </p>
        <p className="text-sm text-white mt-2">21.10.2023</p>
      </div>
    </div>
  );
}
