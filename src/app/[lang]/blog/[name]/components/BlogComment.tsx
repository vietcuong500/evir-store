"use client";

import { Button, Input } from "@/components";
import { getCookie } from "cookies-next";
import { useState } from "react";
// import { postComment } from "../action";

export const postComment = async (content: string, post_id: number) => {
  const token = getCookie("token");
  const user_id: any = getCookie("user_id");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog-comment`, {
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
  return data;
};

export default function BlogComment(props: any) {
  const { postId, refetch } = props;

  const [value, setValue] = useState("");
  const user_id = getCookie("user_id");
  return (
    <div className="py-8">
      <p className="uppercase text-xl text-neutral-900 mb-3 font-[playfair]">
        Bình luận
      </p>
      <p className="text-sm text-neutral-700 mb-6">
        Đăng nhập để có thể bình luận cho bài viết này
      </p>
      {user_id ? (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await postComment(value, Number(postId));
            setValue('');
            refetch();
          }}
          className="flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="comment"
              className="block mb-1 text-neutral-800 text-sm"
            >
              Bình luận
              <sup className="text-red-600 ml-1">*</sup>
            </label>
            <Input
              name="content"
              id="comment"
              className="w-full"
              placeholder=""
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-fit">
            Gửi
          </Button>
        </form>
      ) : null}
    </div>
  );
}
