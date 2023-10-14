import Image from "next/image";
import Link from "next/link";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineMarkChatUnread, MdStarBorder } from "react-icons/md";

export default function NewsCard() {
  return (
    <div className="w-full">
      <div className="w-full h-56 group relative">
        <div className="w-full h-full absolute left-0 top-0 bg-neutral-900/50"></div>
        <p className="absolute bg-white rounded-sm top-4 left-4 w-14 h-16 flex items-center justify-center flex-col uppercase text-lg">
          <span>22</span>
          <span className="text-sm">jun</span>
        </p>
        <Image
          src="/blog-post-hand-made-3.jpg"
          alt="blog"
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
          style={{ width: "100%", height: "100%" }} // optional
        />
        <div className="absolute cursor-pointer bg-emerald-700 text-white uppercase text-xs px-4 py-2 rounded-sm font-semibold -bottom-4 h-8 left-[50%] -translate-x-[50%]">
          Accessories
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg">Minimalist Japanese-inspired furniture</p>
        <div className="flex items-center gap-2 justify-center">
          <MdStarBorder className="w-4 h-4" />
          <MdOutlineMarkChatUnread className="w-4 h-4" />
          <FiShare2 className="w-4 h-4" />
        </div>
        <p className="text-neutral-700 mt-2 mb-3 text-sm">Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt ...</p>
        <Link href="/news/das" className="text-sm transition-all duration-200 uppercase text-emerald-700 hover:text-emerald-950" >continue reading</Link>
      </div>
    </div>
  );
}
