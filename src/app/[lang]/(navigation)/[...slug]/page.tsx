import { Breadcrumb } from "@/components";
import { getPage } from "@/lib/getPage";
import { notFound } from "next/navigation";

export default async function CustomizePage(props: any) {
  const searchParams = props.searchParams;
  const query = Object.fromEntries(Object.entries(searchParams));
  const { page } = query;
  const data = await getPage(Number(page));
  if (!data.data) {
    return notFound();
  }
  return (
    <div>
      <div className="bg-neutral-100 py-6 h-40 text-center flex flex-col items-center justify-center">
        <p className="text-3xl text-black text-center font-[playfair]">
          {data.data.title}
        </p>
        <Breadcrumb
          className="justify-center mt-2"
          list={[
            {
              title: "Trang chủ",
              href: "/",
            },
            {
              title: data.data.title,
              href: `${data.data.slug}?page=${data.data.id}`,
            },
          ]}
        />
      </div>
      <div
        className="text-neutral-800 mt-2 mb-3 text-sm container mx-auto"
        dangerouslySetInnerHTML={{ __html: data.data.content }}
      ></div>
    </div>
  );
}
