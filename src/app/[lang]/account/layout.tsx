import { Breadcrumb, NewsLetter } from "@/components";
import clsx from "clsx";
import Link from "next/link";
import { headers } from "next/headers";
import LogoutButton from "./components/LogoutButton";

const menu = [
  {
    value: "infomation",
    label: "Thông tin tài khoản",
    href: "/account",
  },
  {
    value: "orders",
    label: "Lịch sử mua hàng",
    href: "/account/purchase-history?page=1&page_size=10",
  },
  // {
  //   value: "address",
  //   label: "Địa chỉ giao hàng",
  //   href: "/account/address",
  // },
  {
    value: "wishlist",
    label: "Sản phẩm yêu thích",
    href: "/account/wishlist",
  },
  // {
  //   value: "logout",
  //   label: "Đăng xuất",
  //   href: "/login",
  // },
];

export default function AccountLayout(props: any) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");
  return (
    <div>
      <div className="bg-neutral-100 ">
        <div className="py-6 h-40 text-center container mx-auto flex items-center justify-center flex-col">
          <p className="text-3xl font-[playfair] text-black text-center">
            Quản lý tài khoản
          </p>
          <Breadcrumb
            className="justify-center mt-2"
            list={[
              { title: "Trang chủ", href: "/" },
              { title: "Tài khoản", href: "/account" },
            ]}
          />
        </div>
      </div>

      <div className="container my-8 mx-auto grid grid-cols-12 gap-8">
        <div className=" col-span-12 lg:col-span-3">
          <ul>
            {menu.map((el: any, id: number) => (
              <li key={id}>
                <Link
                  className={clsx(
                    "-mx-3 px-3 py-2 block text-sm cursor-pointer hover:bg-neutral-100",
                    {
                      "bg-neutral-200 font-medium": pathname === el.href,
                    }
                  )}
                  href={`/${props.params.lang}/${el.href}`}
                >
                  {el.label}
                </Link>
              </li>
            ))}
            <LogoutButton />
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-9">{props.children}</div>
      </div>

      <NewsLetter />
    </div>
  );
}
