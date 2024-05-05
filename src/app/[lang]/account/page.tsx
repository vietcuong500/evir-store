import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AccountInfo from "./components/AccountInfor";
import AccountOrders from "./components/AccountOrders";
import AccountWishList from "./components/AccountWishlist";

const menu = [
  {
    value: "infomation",
    label: "Thông tin tài khoản",
  },
  {
    value: "orders",
    label: "Lịch sử mua hàng",
  },
  // {
  //   value: "address",
  //   label: "Địa chỉ giao hàng",
  // },
  {
    value: "wishlist",
    label: "Sản phẩm yêu thích",
  },
  // {
  //   value: "logout",
  //   label: "Đăng xuất",
  // },
];

export default function AccountPage() {
  return <AccountInfo />;
}
