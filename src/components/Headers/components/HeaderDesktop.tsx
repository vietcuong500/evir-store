import Link from "next/link";
import {
  RiPhoneFill,
  RiSearch2Line,
  RiHeart3Line,
  RiShoppingBasket2Line,
} from "react-icons/ri";

export default function HeaderDesktop() {
  return (
    <>
      <div className="hidden xl:block border-b border-neutral-100">
        <div className="text-sm py-4 container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-neutral-800">
              <RiPhoneFill className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-medium">Call toll-free</p>
                <span className="text-neutral-500 font-light">
                  (+84) 099 213 826
                </span>
              </div>
            </div>
            <div>
              <p className="font-medium">Any questions</p>
              <span className="text-neutral-500 font-light">hand@made.com</span>
            </div>
          </div>

          <div>
            <Link href="/">
              <h1 className="uppercase font-semibold text-lg text-black tracking-wide">
                woodmart
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <p className="uppercase text-neutral-700">
              <Link className="mr-1 hover:text-green-600" href="/login">
                Login
              </Link>
              /
              <Link className="ml-1 hover:text-green-600" href="/register">
                Register
              </Link>
            </p>
            <RiSearch2Line className="w-5 h-5" />
            <RiHeart3Line className="w-5 h-5" />
            <RiShoppingBasket2Line className="w-5 h-5" />
            <span className="text-neutral-700">$0.00</span>
          </div>
        </div>
      </div>
      <div className="hidden xl:block border-b border-neutral-100">
        <u className="flex items-center justify-center list-none no-underline gap-4 uppercase text-neutral-600 py-4 text-sm">
          <li className="flex group flex-col">
            <Link className="group-hover:text-neutral-900" href="/shop">
              shop
            </Link>
            <span className="inline-block h-[1px] w-0 transition-all duration-200 group-hover:w-full bg-green-600"></span>
          </li>
          <li className="flex group flex-col">
            <Link className="group-hover:text-neutral-900" href="/blog">
              blog
            </Link>
            <span className="inline-block h-[1px] w-0 transition-all duration-200 group-hover:w-full bg-green-600"></span>
          </li>
          <li className="flex group flex-col">
            <Link className="group-hover:text-neutral-900" href="/our-factory">
              our factory
            </Link>
            <span className="inline-block h-[1px] w-0 transition-all duration-200 group-hover:w-full bg-green-600"></span>
          </li>
          <li className="flex group flex-col">
            <Link className="group-hover:text-neutral-900" href="/venders">
              list of venders
            </Link>
            <span className="inline-block h-[1px] w-0 transition-all duration-200 group-hover:w-full bg-green-600"></span>
          </li>
          <li className="flex group flex-col">
            <Link className="group-hover:text-neutral-900" href="/news">
              page
            </Link>
            <span className="inline-block h-[1px] w-0 transition-all duration-200 group-hover:w-full bg-green-600"></span>
          </li>
        </u>
      </div>
    </>
  );
}
