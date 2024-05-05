import { Button } from "@/components";
import { formatCurrency } from "@/utlis/common";
import clsx from "clsx";
import moment from "moment";
import { cookies } from "next/headers";
import Image from "next/image";
import ButtonPayment from "./components/ButtonPayment";
import ReviewOrder from "./components/ReviewOrder";
import queryString from "query-string";
import PurchasePagination from "./components/PurchasePagination";

const PAYMENT_STATUS: any = {
  NO_PAID: "Chưa thanh toán",
  PAID: "Đã thanh toán",
};

const PAYMENT_TYPE: any = {
  NEW_ORDER: "Chờ xác nhận",
  WAITING_DELIVERING: "Đã xác nhận",
  DELIVERING: "Đang giao hàng",
  DELIVERED: "Giao hàng thành công",
  CANCELLED: "Đã hủy",
};

const getOrders = async (query: any) => {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/order/listing`,
    query: {
      ...query,
      page_size: 5,
    },
  });
  const token = cookies().get("token");
  const res = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    next: {
      tags: ["order"],
    },
  });
  const data = await res.json();
  return data;
};

export default async function PurchaseHistory(props: any) {
  const searchParams = props.searchParams;
  const query = Object.fromEntries(Object.entries(searchParams));
  const data = await getOrders(query);

  console.log(data.data[0].order_details);
  return (
    <div>
      <div className="">
        <p className="font-medium mb-2">Lịch sử mua hàng</p>
        <p className="text-sm text-neutral-700">
          Bạn có thể cập nhật thông tin của mình ở trang này
        </p>
      </div>
      <div className="w-full h-[1px] bg-neutral-300 my-4"></div>
      <div className="flex flex-col">
        {data.data.map((el: any, id: number) => (
          <div key={id} className="border-b border-neutral-300 py-4">
            <div className="flex mb-2 text-sm gap-4 items-center">
              <p className="font-medium">
                Mã đơn hàng: <span className="font-normal">#{el.id}</span>
              </p>
              <p className="font-medium">
                Ngày đặt hàng:{" "}
                <span className="font-normal">
                  {moment(el?.order_date).format("DD/MM/YYYY")}
                </span>
              </p>
              <p
                className={clsx(
                  "ml-auto px-2 py-1 rounded-sm shadow-sm text-xs",
                  {
                    "bg-green-600 text-white": el.status === "DELIVERED",
                    "bg-blue-600 text-white ":
                      el.status === "WAITING_DELIVERING",
                    "bg-neutral-200 text-black": el.status === "NEW_ORDER",
                    "bg-yellow-600 !text-white": el.status === "DELIVERING",
                  }
                )}
              >
                {PAYMENT_TYPE[el.status]}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {el.order_details.map((detail: any, detail_id: number) => (
                <div className="flex justify-between" key={detail_id}>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-neutral-100">
                      {detail.product.images ? (
                        <Image
                          src={detail.product.images}
                          alt={detail.product.name}
                          width={64}
                          height={64}
                        />
                      ) : null}
                    </div>
                    <div className="text-sm py-2">
                      <p className="uppercase">{detail.product.name}</p>
                      <p className="text-neutral-800">
                        Số lượng: {detail.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">
                    {formatCurrency(detail.total)}đ
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="font-medium text-sm inline-flex flex-col">
                <p>
                  Phương thức thanh toán:{" "}
                  <span className="font-normal">{el.payment_type}</span>
                </p>

                <span
                  className={clsx("px-3 py-1 rounded w-fit", {
                    "bg-neutral-200": el.payment_status === "NO_PAID",
                    "bg-lime-700 text-white": el.payment_status === "PAID",
                  })}
                >
                  {PAYMENT_STATUS[el.payment_status]}
                </span>
              </div>
              {el.payment_status === "NO_PAID" && el.payment_type !== "COD" ? (
                <ButtonPayment paymentType={el.payment_type} orderId={el.id} />
              ) : null}
            </div>
            <div className="mt-4 flex justify-end">
              {el.status === "DELIVERED" ? (
                <ReviewOrder orderDetails={el.order_details} orderId={el.id} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <PurchasePagination query={query} page={query.page} total={data.total} />
    </div>
  );
}
