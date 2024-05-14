import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair } from "next/font/google";
import { Footer, Header } from "@/components/index";
import AuthProvider from "@/contains/AuthProvider/AuthProvider";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";
import { getConfigHomePage } from "@/lib/homepage";
import ThemeProvider from "@/contains/ThemesProvider/ThemesProvider";
import { getPages } from "@/lib/getPage";
import { Locale, i18n } from "@/i18n.config";
import ToastProvider from "@/contains/ToastProvider";
import { getDictionary } from "@/lib/dictionary";
import { getListingPost } from "./blog/[name]/page";
import Providers from "@/utlis/provider";
import MessageChar from "@/components/MessageChar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eviromet",
  description: "Chuyên bán đồ thủ công mỹ nghệ",
  icons: {
    icon: "/logo.png",
  },
};

const getMe = async () => {
  const token = cookies().get("token")?.value;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.ok) {
    const data = await res.json();
    setCookie("user_id", data.data.id);
    return data;
  }
  return null;
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const data = await getMe();
  const config = await getConfigHomePage(params.lang);
  const pages = await getPages();
  const dictionary = await getDictionary(params.lang);
  const blogs = await getListingPost({
    page: 1,
    page_size: 2,
    languageCode: params.lang.toUpperCase(),
    filter_status: "ACTIVE",
  });
  
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider value={{ ...config, lang: params.lang, dictionary }}>
            <ToastProvider>
              <AuthProvider>
                <Header
                  navigation={pages.data}
                  config={config?.header}
                  user={data ? data.data : null}
                />
                {children}
                <Footer data={blogs.data} config={config} />
              </AuthProvider>
            </ToastProvider>
          </ThemeProvider>
        </Providers>
        <MessageChar/>
      </body>
    </html>
  );
}
