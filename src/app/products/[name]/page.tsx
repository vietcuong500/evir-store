import Image from "next/image";
import {
  FiMinus,
  FiPlus,
  FiStar,
  FiHeart,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";
import { MdFacebook } from "react-icons/md";

export default function ProductPage() {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="col-span-1 bg-neutral-100">
          {/* <Image
            src="/product1.jpg"
            alt="banner"
            priority={true}
            sizes="100vw"
            fill={true}
            objectFit="cover"
          /> */}
        </div>
        <div className="col-span-1">
          <div className="flex items-center capitalize text-sm text-neutral-600">
            <p className="mr-2">Home</p> / <p className="mr-2 ml-2">decor</p> /{" "}
            <p className="text-neutral-900 ml-2">Wall Photo</p>
          </div>
          <p className="text-2xl font-semibold text-neutral-950 mt-6 mb-4">
            Wall Photo
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <FiStar className="text-yellow-500 fill-yellow-500" />
              <FiStar className="text-yellow-500 fill-yellow-500" />
              <FiStar className="text-yellow-500 fill-yellow-500" />
              <FiStar className="text-yellow-500 fill-yellow-500" />
              <FiStar />
            </div>
            <p className="text-sm text-neutral-700">(12 customers reviews)</p>
          </div>
          <p className="text-xl font-semibold text-emerald-600 mt-6 mb-4">
            $599.00 USD
          </p>
          <p className="text-sm text-neutral-800">
            Himenaeos parturient nam a justo placerat lorem erat pretium a fusce
            pharetra pretium enim sagittis ut nunc neque torquent sem a
            leo.Dictumst himenaeos primis torquent ridiculus porttitor turpis.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-neutral-100">
              <button className="w-9 h-9 flex-center hover:bg-emerald-600 hover:text-white">
                <FiMinus />
              </button>
              <input
                className="w-9 h-9 text-center pl-3 flex-center border-l border-r border-neutral-100"
                type="number"
                value={1}
              />
              <button className="w-9 h-9 flex-center hover:bg-emerald-600 hover:text-white">
                <FiPlus />
              </button>
            </div>
            <button className="w-28 h-9 uppercase text-sm rounded bg-emerald-600 text-white font-semibold">
              Add to cart
            </button>
          </div>

          <div className="flex gap-2 items-center text-neutral-700 mt-6 cursor-pointer hover:text-neutral-400 w-fit">
            <FiHeart />
            <p className="text-sm font-semibold">Add to wishlist</p>
          </div>

          <div className="w-full h-[1px] bg-neutral-100 my-4"></div>
          <div>
            <p className="text-neutral-800 text-sm">
              <span className="font-semibold">Category: </span>Decor
            </p>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-sm font-semibold text-neutral-800">Share: </p>
              <div className="flex items-center gap-2 fill-neutral-200">
                <FiFacebook className="fill-neutral-100" />
                <FiInstagram />
                <FiTwitter />
                <FiYoutube/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
