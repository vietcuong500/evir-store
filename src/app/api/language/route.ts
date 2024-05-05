import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET(req: Request) {
  const language = cookies().get("language");
  if (language)
    return NextResponse.json({
      language: language.value,
    });
  return NextResponse.json({
    language: "VI",
  });
}
