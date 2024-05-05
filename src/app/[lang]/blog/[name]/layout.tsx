import { Breadcrumb, NewsLetter } from "@/components";

export default function PostLayout(props: any) {
  return (
    <div>
      <div className="bg-neutral-100 py-6 h-40 text-center flex flex-col items-center justify-center">
        <p className="text-3xl text-black text-center font-[playfair]">
          Bài viết
        </p>
        <Breadcrumb
          className="justify-center mt-2"
          list={[
            {
              title: "Trang chủ",
              href: "/",
            },
            {
              title: "Bài viết",
              href: "/blog",
            },
          ]}
        />
      </div>
      {props.children}
      <NewsLetter />
    </div>
  );
}
