import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const token = cookies().get("token")?.value;
  const user_id: any = cookies().get("user_id")?.value;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog-comment`, {
    method: "POST",
    body: JSON.stringify({
      ...body,
      post_id: Number(body.post_id),
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
  return NextResponse.json(data);
}
