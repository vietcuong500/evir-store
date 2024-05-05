"use client";

import { useState } from "react";
import AccountInfo from "./AccountInfor";
import AccountOrders from "./AccountOrders";
import AccountWishList from "./AccountWishlist";

function AccountMain() {
  const [tabCurrent, setTabCurrent] = useState("infomation");

  return (
    <div className="w-9/12">
      {tabCurrent === "infomation" ? (
        <AccountInfo />
      ) : tabCurrent === "orders" ? (
        <AccountOrders />
      ) : tabCurrent === "wishlist" ? (
        <AccountWishList />
      ) : null}
    </div>
  );
}

export default AccountMain;
