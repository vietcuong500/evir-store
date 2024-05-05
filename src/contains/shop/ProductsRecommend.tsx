import ProductCardLite from "./ProductCardLite";

export function ProductRecommend(props: any) {
  const { data } = props;
  return (
    <div className="mt-4">
      <p className="text-2xl font-medium text-neutral-900 font-[playfair]">
        Sản phẩm
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {data.slice(0, 4).map((el: any, id: number) => (
          <ProductCardLite
            name={el.name}
            image={el.images}
            review={el.review}
            id={el.id}
            price={el.price_current}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}
