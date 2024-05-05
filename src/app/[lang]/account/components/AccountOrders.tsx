const orders = [
  {
    create_at: "22/01/2023",
    id: "#133122",
    status: "done",
    total: "320.000",
  },

  {
    create_at: "22/01/2023",
    id: "#133122",
    status: "done",
    total: "320.000",
  },
];


export default function AccountOrders() {
  return (
    <div>
      <div className="">
        <p className="font-medium mb-2">Lịch sử mua hàng</p>
        <p className="text-sm text-neutral-700">
          Bạn có thể cập nhật thông tin của mình ở trang này
        </p>
      </div>
      <div className="w-full h-[1px] bg-neutral-300 my-4"></div>
      <div className="flex flex-col gap-8">
        {orders.map((el: any, id: number) => (
          <div key={id} className="">
            <div className="flex mb-2 text-sm gap-4 items-center">
              <p className="font-medium">
                Mã đơn hàng: <span className="font-normal">{el.id}</span>
              </p>
              <p className="font-medium">
                Ngày đặt hàng:{" "}
                <span className="font-normal">{el.create_at}</span>
              </p>
              <p className="bg-green-600 ml-auto text-white px-2 py-1 rounded-sm shadow-sm text-xs">
                Hoàn thành
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-neutral-100"></div>
                <div className="text-sm py-2">
                  <p className="uppercase">Bộ bát gốm sứ</p>
                  <p className="text-neutral-800">Số lượng: 1</p>
                </div>
              </div>
              <p className="text-sm font-medium">149.000 đ</p>
            </div>
            <div>
              {/* <p>
                <span>Ngày đặt:</span>
                <span>{el.create_at}</span>
              </p> */}
              {/* <p className="text-right font-medium text-neutral-800">
                <span>Tổng tiền:</span>
                <span>{el.total} đ</span>
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
