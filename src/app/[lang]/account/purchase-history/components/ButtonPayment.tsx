"use client";
import { getCookie } from "cookies-next";
export default function ButtonPayment(props: any) {
  const payment = async (id: number, payment_type: string) => {
    const token = getCookie("token");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/re-payment/` + id,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          payment_type,
          return_url: `${process.env.NEXT_PUBLIC_URL_RETURN}/order`,
        }),
      }
    );
    const data = await res.json();
    if (data.code === 200) {
      window.open(data.data.url_redirect, "_blank");
    }
    return data;
  };
  const { paymentType, orderId } = props;
  return (
    <button
      className="h-9 px-4 bg-lime-800 text-white rounded font-medium text-sm hover:bg-lime-900 "
      onClick={() => payment(orderId, paymentType)}
    >
      Thanh toán ngay
    </button>
  );
}
