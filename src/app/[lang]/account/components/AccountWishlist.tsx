import { ProductCart } from "@/components";
import { MdClose } from "react-icons/md";

export default function AccountWishList() {
  return (
    <div>
      <div className="">
        <p className="font-medium mb-2">Sản phẩm đã lưu</p>
        <p className="text-sm text-neutral-700">
          Bạn có thể cập nhật thông tin của mình ở trang này
        </p>
      </div>
      <div className="w-full h-[1px] bg-neutral-300 my-4"></div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        <div>
          <button className="flex gap-2 items-center mb-2 text-neutral-900 hover:text-neutral-500">
            <MdClose />
            <span className="text-sm uppercase font-medium">remove</span>
          </button>
          <ProductCart />
        </div>
        <div>
          <button className="flex gap-2 items-center mb-2 text-neutral-900 hover:text-neutral-500">
            <MdClose />
            <span className="text-sm uppercase font-medium">remove</span>
          </button>
          <ProductCart />
        </div>
      </div>
    </div>
  );
}
