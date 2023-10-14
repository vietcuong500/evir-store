import ProductCardLite from "./ProductCardLite";

export function ProductRecommend() {
  return (
    <div>
      <p className="text-xl font-semibold text-neutral-900">Sản phẩm</p>
      <div className="mt-4 flex flex-col gap-4">
        <ProductCardLite/>
        <ProductCardLite/>
        <ProductCardLite/>
        <ProductCardLite/>
      </div>
    </div>
  );
}
