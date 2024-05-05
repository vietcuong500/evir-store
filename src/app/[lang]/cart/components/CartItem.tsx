import { formatCurrency } from "@/utlis/common";
import Image from "next/image";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function CartItem(props: any) {
  const { name, price, quantity, onPlus, onMinus, onDelete, image } = props;
  return (
    <div className="grid grid-cols-12">
      <div className="flex gap-6 col-span-7">
        <div className="w-20 h-24 bg-neutral-200">
          <Image src={image} alt={name} width={80} height={112} />
        </div>
        <div className="grow">
          <p className="font-medium text-sm">{name}</p>
          <p className="text-sm text-neutral-700">
            {formatCurrency(price)} VND
          </p>
          <div className="flex mt-2 items-center border border-neutral-200 w-fit">
            <button
              onClick={onMinus}
              className="w-9 h-9 flex-center hover:bg-emerald-600 hover:text-white"
            >
              <FiMinus />
            </button>
            <input
              className="w-9 h-9 text-center pl-3 flex-center border-l border-r border-neutral-200"
              type="number"
              value={quantity}
            />
            <button
              onClick={onPlus}
              className="w-9 h-9 flex-center hover:bg-emerald-600 hover:text-white"
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>

      <p className="text-green-800 font-medium col-span-4 self-center justify-end">
        {formatCurrency(quantity * price)} VND
      </p>
      <MdClose
        onClick={onDelete}
        className="text-2xl cursor-pointer text-neutral-800 col-span-1 self-center"
      />
    </div>
  );
}
