import { Button, Input, NewsCard } from "@/components";
import queryString from "query-string";
import ProductReview from "./components/ProductReview";
import RecentPosts from "./components/RecentPosts";
import PostsCategory from "./components/PostsCategory";
import { ProductRecommend } from "@/contains/shop/ProductsRecommend";
// import BlogComment from "./components/BlogComment";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getRandomProducts } from "@/lib/product";
import { Metadata, ResolvingMetadata } from "next";

const BlogComment = dynamic(() => import("./components/BlogComment"), {
  ssr: false,
});

type Props = {
  params: { id: string; lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getBlog = async (id: number, lang: string) => {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog-post/` + id,
    query: {
      languageCode: lang.toUpperCase(),
    },
  });
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export async function getListingPost(params: any) {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog-post`,
    query: { ...params, filter_status: "ACTIVE" },
  });
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

const getCategories = async (lang: string) => {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog-category`,
    query: {
      page_size: 100,
      page: 1,
      languageCode: lang.toUpperCase(),
    },
  });
  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const query = Object.fromEntries(Object.entries(searchParams));
  const { blog_id } = query;
  const { lang } = params;
  const result = await getBlog(Number(blog_id), lang);

  const { data: blog } = result;
  // fetch data
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${blog.title} - Eviromet`,
    openGraph: {
      images: [blog.avatar, ...previousImages],
    },
    description: blog.summary,
  };
}

export default async function PostPage(props: any) {
  const searchParams = props.searchParams;
  const { lang } = props.params;
  const query = Object.fromEntries(Object.entries(searchParams));
  const { blog_id } = query;
  const categories = await getCategories(lang);
  const data = await getBlog(Number(blog_id), lang);
  const blogs = await getListingPost({
    page: 1,
    page_size: 4,
    languageCode: lang.toUpperCase(),
  });
  const random = await getRandomProducts(lang);
  return (
    <div className="container mx-auto flex gap-8 my-8">
      <div className="w-full xl:w-9/12">
        <p className="px-2 py-1 text-xs bg-green-700 text-white uppercase w-fit rounded-sm mx-auto">
          {data.data.category?.name}
        </p>
        <p className="text-3xl font-[playfair] text-center my-4">
          {data.data.title}
        </p>
        <div className="mt-2 mb-3 italic text-neutral-700 text-sm">
          <p>{data.data.summary}</p>
        </div>
        <div
          className="mt-2 mb-3 text-sm text-neutral-800"
          dangerouslySetInnerHTML={{ __html: data.data.content }}
        ></div>

        <Suspense fallback={<p>Loading...</p>}>
          <ProductReview id={Number(blog_id)} />
        </Suspense>

        <div className="my-8">
          <p className="uppercase font-medium">
            <span>Bài viết liên quan</span>
            <span className="block h-[2px] mt-4 w-20 bg-green-800"></span>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {blogs.data.slice(0, 2).map((el: any, id: number) => (
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
        </div>
      </div>
      <div className="hidden xl:block xl:w-3/12">
        <PostsCategory lang={props.params.lang} data={categories?.data} />
        <RecentPosts data={blogs.data.slice(0, 4)} />
        <ProductRecommend data={random.data} />
      </div>
    </div>
  );
}
