"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface CommenModel {
  content: string;
  parent_id?: null;
  post_id: number;
  user_id: number;
}

export const postComment = async (content: string, post_id: number) => {
  // return fetch(`${process.env.URL}/api/blog`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     content,
  //     post_id,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     revalidateTag("comment-blog");
  //     revalidatePath("/blog/[name]", "page");
  //     return data;
  //   });
  const token = cookies().get("token")?.value;
  const user_id: any = cookies().get("user_id")?.value;
  const res = await fetch(`${process.env.URL}/blog-comment`, {
    method: "POST",
    body: JSON.stringify({
      content,
      post_id,
      parent_id: null,
      user_id: Number(user_id),
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  revalidateTag("comment-blog");
  revalidatePath("/blog/[name]", "page");
  return data;
};
