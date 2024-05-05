"use client";

import { Button, HelperText, Input, OTPField } from "@/components";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { useMutation } from "@/hooks/useMutation";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";

export default function RegisterPage() {
  const router = useRouter();
  const { lang } = useThemeConfig();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleRegister = handleSubmit(async (formData) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.code === 0 || data.code === 200) {
      enqueueSnackbar({
        message: "Đăng ký tài khoản thành công",
      });
      router.push(`/${lang}/login`);
    } else {
      enqueueSnackbar({
        message: data.message,
        variant: "error",
      });
    }
  });
  const [mutate, isPending] = useMutation(handleRegister);
  const [type, setType] = useState("password");
  return (
    <div className="my-10 flex gap-16 mx-auto container">
      <div className="w-full lg:w-1/2">
        <p className="uppercase font-medium text-xl mt-6 mb-4 h-14 font-[playgair]">Đăng ký</p>
        <form onSubmit={mutate} className="flex w-full flex-col gap-4">
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <div>
                <label className="text-sm mb-1 font-medium text-neutral-700 inline-block">
                  Tên đăng nhập
                </label>
                <Input value={value} onChange={onChange} />
                <HelperText
                  error={!!errors["username"]}
                  message={errors["username"]?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <div>
                <label className="text-sm mb-1 font-medium text-neutral-700 inline-block">
                  Mật khẩu
                </label>
                <Input
                  type={type}
                  value={value}
                  onChange={onChange}
                  iconEnd={
                    <FiEye
                      className="cursor-pointer"
                      onClick={() => {
                        if (type === "password") setType("text");
                        else setType("password");
                      }}
                    />
                  }
                />
                <HelperText
                  error={!!errors["password"]}
                  message={errors["password"]?.message}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <div>
                <label className="text-sm mb-1 font-medium text-neutral-700 inline-block">
                  Email
                </label>
                <Input value={value} onChange={onChange} />
                <HelperText
                  error={!!errors["email"]}
                  message={errors["email"]?.message}
                />
              </div>
            )}
          />
          <Button loading={isPending} type="submit">
            Đăng ký
          </Button>
        </form>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col border-l border-neutral-200 pl-16">
        <p className="uppercase font-medium text-xl text-center h-14 font-[playfair]">Đăng nhập</p>
        <p className="text-sm mt-4 text-neutral-700 text-center">
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and get a new account set up
          for you in no time. We will only ask you for information necessary to
          make the purchase process faster and easier.
        </p>
        <button
          className="w-fit self-center mt-6 h-9 bg-neutral-200 px-6 hover:bg-neutral-300 text-sm rounded-sm uppercase"
          onClick={() => router.push(`/${lang}/login`)}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
