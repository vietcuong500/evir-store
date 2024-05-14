import { InputField } from "@/components";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function OrderInfo() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <p>Thông tin giao hàng</p>

      <div className="mt-4 flex flex-col gap-4">
        <Controller
          control={control}
          name="full_name"
          render={({ field: { onChange, value } }) => (
            <InputField
              name="full_name"
              value={value}
              onChange={onChange}
              label="Họ và tên"
              required={true}
              error={!!errors["full_name"]}
              message={errors["full_name"]?.message}
              placeholder="Nhập họ và tên"
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, value } }) => (
            <InputField
              name="country"
              value={value}
              onChange={onChange}
              label="Quốc gia"
              error={!!errors["country"]}
              message={errors["country"]?.message}
              required={true}
            />
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, value } }) => (
              <InputField
                name="city"
                value={value}
                onChange={onChange}
                label="Thành phố"
                error={!!errors["city"]}
                message={errors["city"]?.message}
                required={true}
              />
            )}
          />
          <Controller
            control={control}
            name="postcode"
            render={({ field: { onChange, value } }) => (
              <InputField
                name="postcode"
                value={value}
                onChange={onChange}
                label="CODE (Mã bưu điện)"
                error={!!errors["postcode"]}
                message={errors["postcode"]?.message}
                required={true}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, value } }) => (
            <InputField
              name="address"
              value={value}
              onChange={onChange}
              label="Địa chỉ"
              error={!!errors["address"]}
              message={errors["address"]?.message}
              placeholder="Nhập địa chỉ nhận hàng"
              required={true}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <InputField
              name="phone"
              value={value}
              onChange={onChange}
              label="Số điện thoại"
              error={!!errors["phone"]}
              message={errors["phone"]?.message}
              placeholder="Nhập số điện thoại"
              required={true}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputField
              name="email"
              value={value}
              onChange={onChange}
              label="Email"
              error={!!errors["email"]}
              message={errors["email"]?.message}
              placeholder="example@gmail.com"
            />
          )}
        />
        <div>
          <label htmlFor="note" className="text-sm block font-medium mb-1">
            Ghi chú
          </label>
          <textarea
            id="note"
            placeholder="Ghi chú cho cửa hàng về dơn hàng này"
            className="h-full border px-3 py-2 rounded ring-1 ring-transparent focus:ring-[#8d765a] transition-all duration-200 border-neutral-200 bg-transparent w-full ring-neutral-200 placeholder:text-sm placeholder:text-neutral-600  outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
