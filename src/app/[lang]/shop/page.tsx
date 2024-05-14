import { ProductCart } from "@/components";
import TotalProduct from "./components/TotalProduct";
import PaginationProduct from "./components/PaginationProduct";
import FilterMobile from "./components/FilterMobile";
import { ProductRecommend } from "@/contains/shop/ProductsRecommend";
import ProductCategories from "@/contains/shop/ProductCategories";
import { getProducts, getRandomProducts } from "@/lib/product";
import { getCategories } from "@/lib/category";
import SeacrhProduct from "./components/SearchProduct";

export default async function ShopPage(props: any) {
  const { page, collection, sort, page_size, keyword } = props.searchParams;
  const { lang } = props.params;
  const data = await getProducts({
    page,
    collection,
    page_size: 12,
    keyword,
    lang,
  });
  const categories = await getCategories(lang);
  const random = await getRandomProducts(lang);
  return (
    <div className="container mx-auto flex gap-8 my-8">
      <div className="w-3/12 hidden lg:flex flex-col">
        <SeacrhProduct />
        <div className="w-full mt-6 mb-4 h-[1px] bg-neutral-300"></div>

        <ProductCategories
          data={categories.data.map((el: any) => ({
            title: el.name,
            value: el.id,
            count: el.num_of_products,
          }))}
          value={collection}
          query={{
            page,
            page_size,
            collection,
          }}
        />
        <div className="w-full mt-4 h-[1px] bg-neutral-300"></div>
        <ProductRecommend data={random.data} />
        <div className="w-full my-6 h-[1px] bg-neutral-300"></div>
        <div className="w-full h-52 bg-neutral-100">
          <div className="p-5">
            <p className="uppercase text-[#584f3f] mb-2">semper erat</p>
            <p className="text-xl capitalize text-neutral-900 font-[playfair]">
              Condim Sceleris Impertas Parturient
            </p>
            <button className="px-2 py-1 bg-emerald-500 mt-4 text-white text-xs rounded-sm uppercase">
              view more
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-9/12">
        <FilterMobile
          category={{
            data: categories.data.map((el: any) => ({
              title: el.name,
              value: el.id,
              count: 5,
            })),
            value: collection,
          }}
          data={random.data}
        />
        <div>
          <TotalProduct total={data.total} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.data.map((el: any, id: number) => (
              <ProductCart
                id={el.id}
                name={el.name}
                slug={el.slug}
                price={el.price}
                priceCurrent={el.price_current}
                discount={el.discount}
                category={el.category}
                image={el.images ? el.images : ""}
                review={el.review}
                summary={el.about_the_product}
                key={id}
                query={{
                  page,
                  collection,
                  sort,
                }}
              />
            ))}
          </div>
          <PaginationProduct
            pageSize={12}
            total={data.total}
            page={page}
            collection={collection}
          />
        </div>
      </div>
    </div>
  );
}
