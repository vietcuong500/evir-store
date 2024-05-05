import { Breadcrumb, Button, Rating } from "@/components";
import { formatCurrency } from "@/utlis/common";
import {
  FiHeart,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiCheck,
} from "react-icons/fi";
import { Metadata, ResolvingMetadata } from "next";
import RelatedProducts from "./components/RelatedProducts";
import TabsProduct from "./components/TabsProduct";
import queryString from "query-string";
import ButtonAddCart from "./components/ButtonAddCart";
import ProductImages from "./components/ProductImages";
import ButtonCheckout from "./components/ButtonCheckout";
import ButtonAddWishlist from "./components/ButtonAddWishlist";
import { getProduct, getRandomProducts } from "@/lib/product";
import { calcPriceCurrent } from "@/lib/common";

const getReview = async (id: number) => {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/review`,
    query: {
      page: 1,
      page_size: 10,
      product_id: id,
    },
  });
  const res = await fetch(url);
  const data = await res.json();
  if (data.code === 200) {
    return data.data;
  }
  return [];
};

type Props = {
  params: { id: string; lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const query = Object.fromEntries(Object.entries(searchParams));
  const { product_id } = query;
  const { lang } = params;
  const result = await getProduct(Number(product_id), lang);

  const {data: product} = result
  // fetch data
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product.name} - Eviromet`,
    openGraph: {
      images: [product.images, ...previousImages],
    },
    description: product.summary,
  };
}

export default async function ProductPage(props: any) {
  const searchParams = props.searchParams;
  const query = Object.fromEntries(Object.entries(searchParams));
  const { product_id } = query;
  const { lang } = props.params;
  const data = await getProduct(Number(product_id), lang);
  const customerReviews = await getReview(Number(product_id));
  const result = data.data;
  const {
    stock,
    price,
    name,
    discount,
    review,
    category,
    about_the_product,
    lst_image,
    images,
  } = result;
  const { avg_star, total_review } = review;
  const random = await getRandomProducts(lang);
  return (
    <div>
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-8">
          <ProductImages
            images={images}
            lstImage={Array.isArray(lst_image) ? lst_image : []}
            className="col-span-1"
          />
          <div className="col-span-1">
            <Breadcrumb
              list={[
                { title: "Home", href: "/" },
                { title: category?.name, href: "/" },
                { title: name, href: "/" },
              ]}
            />
            <p className="text-2xl font-semibold text-neutral-950 mt-6 mb-4">
              {name}
            </p>
            <div className="flex items-center gap-3">
              <Rating count={5} defaultValue={Math.ceil(avg_star)} readOnly />
              <p className="text-sm text-neutral-700">
                ({total_review} đánh giá)
              </p>
            </div>
            <p className="text-xl font-semibold text-emerald-600 mt-6 mb-4">
              {discount ? (
                <>
                  <span className="text-neutral-700 text-base font-normal line-through mr-3">
                    {formatCurrency(price)} VND
                  </span>
                  <span className="">
                    {formatCurrency(
                      calcPriceCurrent(price, discount.value, discount.type)
                    )}{" "}
                    VND
                  </span>
                </>
              ) : (
                <span> {formatCurrency(price)} VND</span>
              )}
            </p>
            <p className="text-sm text-neutral-800">{about_the_product}</p>

            <p className="text-sm font-medium mt-6 flex items-center gap-2">
              <FiCheck className="text-xl text-neutral-600" />
              {formatCurrency(stock)} sản phẩm
            </p>

            <ButtonAddCart item={result} />
            <ButtonCheckout item={result} />
            <ButtonAddWishlist item={result} />

            <div className="w-full h-[1px] bg-neutral-100 my-4"></div>
            <div>
              <p className="text-neutral-800 text-sm">
                <span className="font-semibold">Danh mục: </span>
                {category?.name}
              </p>
              <div className="flex items-center mt-2 gap-2">
                <p className="text-sm font-semibold text-neutral-800">
                  Chia sẻ:{" "}
                </p>
                <div className="flex items-center gap-2 fill-neutral-200">
                  <FiFacebook className="fill-neutral-100" />
                  <FiInstagram />
                  <FiTwitter />
                  <FiYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TabsProduct data={result} customerReviews={customerReviews} />
        <RelatedProducts data={random.data} />
      </div>
    </div>
  );
}
