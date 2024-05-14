"use client";

import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { Locale } from "@/i18n.config";
import Link from "next/link";

export default function AuthNavigation({ user }: { user: any }) {
  const { lang, dictionary } = useThemeConfig();
  return (
    <div>
      {!user ? (
        <p className="uppercase text-neutral-700">
          <Link className="mr-1 hover:text-[#8d765a]" href={`/${lang}/login`}>
            {dictionary.navigation.login}
          </Link>
          /
          <Link
            className="ml-1 hover:text-[#8d765a]"
            href={`/${lang}/register`}
          >
            {dictionary.navigation.register}
          </Link>
        </p>
      ) : (
        <Link href={`/${lang}/account`} className="uppercase text-neutral-700">
          {user?.username}
        </Link>
      )}
    </div>
  );
}
