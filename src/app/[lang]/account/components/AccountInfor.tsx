import { Button, Input } from "@/components";

export default function AccountInfo() {
  return (
    <div>
      <div className="">
        <p className="font-medium mb-2">Thông tin cá nhân</p>
        <p className="text-sm text-neutral-700">
          Bạn có thể cập nhật thông tin của mình ở trang này
        </p>
      </div>
      <div className="w-full h-[1px] bg-neutral-300 my-4"></div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <p className="text-sm font-medium mb-2">Thông tin cá nhân</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-full">
                <label className="text-sm block font-medium mb-1" htmlFor="">
                  Họ <sup className="text-red-600 text-xs">*</sup>
                </label>
                <Input placeholder="Nhập họ" />
              </div>
              <div className="w-full">
                <label className="text-sm block font-medium mb-1" htmlFor="">
                  Tên <sup className="text-red-600 text-xs">*</sup>
                </label>
                <Input placeholder="Nhập tên" />
              </div>
            </div>
            <div className="w-full">
              <label className="text-sm block font-medium mb-1" htmlFor="">
                Email
              </label>
              <Input placeholder="Nhập Email" />
            </div>
            <div className="w-full">
              <label className="text-sm block font-medium mb-1" htmlFor="">
                Số điện thoại
              </label>
              <Input placeholder="Nhập SĐT" />
            </div>
            <Button>Cập nhật</Button>
          </div>
        </div>

        <div className="w-1/2">
          <p className="text-sm font-medium mb-2">Đổi mật khẩu</p>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label className="text-sm block font-medium mb-1" htmlFor="">
                Mật khẩu cũ
              </label>
              <Input placeholder="" />
            </div>
            <div className="w-full">
              <label className="text-sm block font-medium mb-1" htmlFor="">
                Mật khẩu mới
              </label>
              <Input placeholder="" />
            </div>
            <div className="w-full">
              <label className="text-sm block font-medium mb-1" htmlFor="">
                Nhập lại mật khẩu mới
              </label>
              <Input placeholder="" />
            </div>
            <Button>Cập nhật</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
