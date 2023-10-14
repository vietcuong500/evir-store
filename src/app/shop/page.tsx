import { ProductCart } from "@/components";
import ProductCategories from "@/contains/shop/ProductCategories";
import { ProductRecommend } from "@/contains/shop/ProductsRecommend";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div>
      <div className="bg-neutral-100 ">
        <div className="py-6 text-center container mx-auto">
          <p className="text-4xl text-black text-center">Shop</p>
          <p className="mt-3 text-sm uppercase text-neutral-800">
            <Link className="hover:text-emerald-900 mr-1" href="/">
              home
            </Link>
            /
            <Link className="hover:text-emerald-900 ml-1" href="/shop">
              Shop
            </Link>
          </p>
        </div>
      </div>
      <div className="container mx-auto flex gap-8 my-8">
        <div className="w-4/12 flex flex-col">
          <ProductCategories />
          <div className="w-full my-6 h-[1px] bg-neutral-300"></div>
          <ProductRecommend />
          <div className="w-full my-6 h-[1px] bg-neutral-300"></div>
          <div className="w-full h-52 bg-neutral-100">
            <div className="p-5">
              <p className="uppercase text-emerald-700 mb-2">semper erat</p>
              <p className="text-xl capitalize text-neutral-900">Condim Sceleris Impertas Parturient</p>
              <button className="px-2 py-1 bg-emerald-500 mt-4 text-white text-xs rounded-sm uppercase">view more</button>
            </div>
          </div>
        </div>
        <div className="w-8/12">
          <div className="grid grid-cols-3 gap-4">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </div>
    </div>
  );
}
