"use client";

import { Button, HelperText, Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { useState } from "react";
import { revalidatePath } from "next/cache";
import { enqueueSnackbar } from "notistack";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { setCookie } from "cookies-next";
import { FiEye } from "react-icons/fi";

export default function FormLogin() {
  const { setUser } = useAuth();
  const { lang } = useThemeConfig();
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(
      yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
      })
    ),
  });

  const handleLogin = handleSubmit(async (formData: any) => {
    setIsPending(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setIsPending(false);
    if (data.code === 200) {
      setCookie("token", data.data.token);
      setCookie("user_id", data.data.id);
      router.push(`/`);
      router.refresh();
      return data;
    } else {
      enqueueSnackbar({
        message: data.message,
        variant: "error",
      });
    }
  });

  // const [state, formAction] = useFormState(login, {
  //   username: "",
  //   password: "",
  // });

  const [type, setType] = useState("password");

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <div>
            <label
              htmlFor="username"
              className="text-sm mb-1 font-medium text-neutral-700 inline-block"
            >
              Tên đăng nhập
            </label>
            <Input  value={value} onChange={onChange} name="username" />
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
            <div>
              <label
                htmlFor="password"
                className="text-sm mb-1 font-medium text-neutral-700 inline-block"
              >
                Mật khẩu
              </label>
              <Input
                value={value}
                onChange={onChange}
                id="password"
                name="password"
                type={type}
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
            </div>
            <HelperText
              error={!!errors["password"]}
              message={errors["password"]?.message}
            />
          </div>
        )}
      />
      <div className="flex items-center text-sm gap-2">
        <input id="remenber_me" className="text-xl" type="checkbox" />
        <label className="cursor-pointer" htmlFor="remenber_me">Ghi nhớ đăng nhập</label>
      </div>
      <Button type="submit">Đăng nhập</Button>
    </form>
  );
}
