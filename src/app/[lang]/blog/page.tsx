import { Breadcrumb, NewsCard, NewsLetter } from "@/components/index";
import queryString from "query-string";
import BlogPagination from "./components/BlogPagination";
import BlogTotal from "./components/BlogTotal";

async function getListingPost(params: any) {
  let temp: any = {
    page: 1,
    page_size: 9,
    ...params,
    filter_status: "ACTIVE",
  };
  const { category } = params;
  if (category) {
    temp = {
      ...temp,
      filter_category_id: category,
    };
  }
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog-post`,
    query: {
      ...temp,
      ...params,
    },
  });
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function BlogPage(props: any) {
  const { page, category, page_size } = props.searchParams;
  const { lang } = props.params;
  const result = await getListingPost({
    page,
    category,
    page_size,
    languageCode: lang.toUpperCase() || "VI",
  });
  const { data, total } = result;
  return (
    <div className="flex flex-col gap-8">
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
              href: "/blog?page=1&page_size=9",
            },
          ]}
        />
      </div>
      <div className="container flex gap-8 mt-8 mx-auto">
        <div className="w-full">
          <BlogTotal total={total} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((el: any, id: number) => (
              <NewsCard
                title={el.title}
                avatar={el.avatar}
                category={el.category?.name}
                content={el.content}
                key={id}
                id={el.id}
                summary={el.summary}
                createAt={el.created_at}
              />
            ))}
          </div>
          <BlogPagination pageSize={page_size} total={total} />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
