import clsx from "clsx";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import queryString from "query-string";
import { FiCheck } from "react-icons/fi";

async function checkPayment(pathname: string, query: any) {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}${pathname}`,
    query,
  });
  const token = cookies().get("token")?.value;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  revalidateTag("order");
  return data;
}

export default async function PaymentPage(props: any) {
  const { searchParams, params } = props;
  const data = await checkPayment(
    `/order/${params.payment_type}`,
    searchParams
  );
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center">
        <div
          className={clsx("flex-center w-14 h-14 relative rounded-full ", {
            "bg-green-700": data.code === 200,
            "bg-red-600": data.code !== 200,
          })}
        >
          <FiCheck className="text-3xl text-white" />
        </div>
        <p className="font-medium text-neutral-800 mt-4 text-xl">
          {data.code === 200
            ? " Thanh toán đơn hàng thành công"
            : " Thanh toán đơn hàng không thành công"}
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
