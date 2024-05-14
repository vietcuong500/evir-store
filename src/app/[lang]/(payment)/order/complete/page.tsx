import clsx from "clsx";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function OrderComplete() {
  return (
    <div className="container mx-auto py-8">
    <div className="flex flex-col items-center">
      <div
        className={clsx("flex-center w-14 h-14 relative rounded-full bg-[#695e4c]")}
      >
        <FiCheck className="text-3xl text-white" />
      </div>
      <p className="font-medium text-neutral-800 mt-4 text-xl">
        Đặt hàng thành công
      </p>
      <p className="text-sm text-neutral-700 mt-2">
        Quay trở lại cửa hàng để tiếp tục mua hàng
      </p>

      <Link
        href="/"
        className="h-8 mt-4 hover:bg-yellow-600 outline-none rounded-md px-4 py-2 bg-yellow-500 font-medium text-sm"
      >
        Quay lại
      </Link>
    </div>
  </div>
  );
}
