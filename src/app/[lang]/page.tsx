import {
  FeatureSection,
  HeroBanner,
  FeatureCollection,
  NewsLetter,
} from "@/components/index";
import FeatureService from "@/components/Features/FeatureService";
import FeaturePost from "@/components/Features/FeaturePost";
import CustomerSay from "@/components/Features/CustomerSay";
import queryString from "query-string";
import {
  getProducts,
  getProductsDiscount,
  getRandomProducts,
} from "@/lib/product";
import _ from "lodash";

async function getListingPost(params: any) {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog-post`,
    query: params,
  });
  const res = await fetch(url, {
    next: {
      tags: ["listing-post"],
    },
  });
  const data = await res.json();
  return data;
}

export default async function Home(props: any) {
  const product_news = await getProducts({
    page: 1,
    page_size: 16,
    lang: props.params.lang,
    sort: "created_at",
  });

  const products = await getProducts({
    page: 1,
    page_size: 16,
    lang: props.params.lang,
  });

  const products_promotion = await getProductsDiscount({
    page: 1,
    page_size: 16,
    lang: props.params.lang,
  });
  const blogs = await getListingPost({
    page: 1,
    page_size: 3,
    languageCode: props.params.lang.toUpperCase(),
  });

  return (
    <div className="flex flex-col gap-y-12">
      <HeroBanner />
      <FeatureSection
        productsNew={product_news}
        products={products}
        productsDiscount={products_promotion}
      />
      <FeatureCollection />
      <FeatureService />
      <FeaturePost blogs={blogs.data} />
      <CustomerSay />
      <NewsLetter />
    </div>
  );
}
