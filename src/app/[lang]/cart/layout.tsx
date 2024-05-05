import { NewsLetter } from "@/components";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CartLayout(props: any) {
  return (
    <div>
      <div className="bg-neutral-100 h-40 py-6 text-center flex items-center justify-center gap-4">
        <Link
          href="/cart"
          className="text-lg uppercase text-center text-black border-b border-lime-700 font-[playfair]"
        >
          Giỏ hàng
        </Link>
        <FiArrowRight />
        <Link
          href="/checkout"
          className="text-lg uppercase text-neutral-600 text-center font-[playfair]"
        >
          Thanh toán
        </Link>
        <FiArrowRight />
        <p className="text-lg uppercase  text-center text-neutral-600 cursor-pointer font-[playfair]">
          Hoàn thành
        </p>
      </div>
      {props.children}
      <NewsLetter />
    </div>
  );
}
