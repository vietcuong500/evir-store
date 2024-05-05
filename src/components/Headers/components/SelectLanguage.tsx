"use client";

import { i18n } from "@/i18n.config";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function SelectLanguage(props: any) {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;

    return `${segments.join("/")}${location.search}`;
  };
  return (
    <div>
      <select
        value={pathname.split("/")[1]}
        onChange={(e) => router.push(redirectedPathName(e.target.value))}
        className="text-white px-4 appearance-none bg-transparent "
      >
        {i18n.locales.map((locale: string) => (
          <option className="text-black" value={locale} key={locale}>
            {locale === "vi" ? "VIETNAME" : "ENGLISH"}
          </option>
        ))}
      </select>
    </div>
  );
}
