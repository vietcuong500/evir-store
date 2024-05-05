"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const login = async (prev: any, formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await res.json();
  if (data.code === 200) {
    redirect("/");
  }
  return data;
};
