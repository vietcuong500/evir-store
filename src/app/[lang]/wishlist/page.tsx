import { Breadcrumb } from "@/components";
import ListWishlist from "./components/ListWishlist";

export default function WishlistPage() {
  return (
    <div>
      <div className="bg-neutral-100 ">
        <div className="py-6 text-center container h-40 mx-auto flex flex-col justify-center items-center">
          <p className="text-3xl font-[plaufair] text-black text-center  capitalize">
            sản phẩm yêu thích
          </p>
          <Breadcrumb
            className="text-center justify-center m-2"
            list={[
              {
                title: "Trang chủ",
                href: "/",
              },
              {
                title: "Yêu thích",
                href: "/wishlist",
              },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto my-8">
        <div>
          <p className="text-2xl text-neutral-950 font-light border-b border-neutral-200 py-2 ">
            Sản phẩm yêu thích
          </p>
        </div>
        <ListWishlist />
      </div>
    </div>
  );
}
