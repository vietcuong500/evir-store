import { Rating } from "@/components";
import { useAuth } from "@/contains/AuthProvider/AuthProvider";
import { useThemeConfig } from "@/contains/ThemesProvider/ThemesProvider";
import { formatCurrency } from "@/utlis/common";
import { Modal, ModalContent } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FiCheck } from "react-icons/fi";
import ButtonAddCart from "../../app/[lang]/products/[name]/components/ButtonAddCart";
import ButtonCheckout from "../../app/[lang]/products/[name]/components/ButtonCheckout";

export default function ProductQuickView(props: any) {
  const {
    isOpen,
    name,
    image,
    onOpenChange,
    discount,
    price,
    review,
    summary,
    id,
    priceCurrent,
  } = props;

  const { lang } = useThemeConfig();

  const { total_review, avg_star } = review || {};
  const url = queryString.stringifyUrl({
    url: `/${lang}/products/${name}`,
    query: {
      product_id: id,
    },
  });

  return (
    <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="!mb-[60px] !lg:mb-[0px]">
        {(onClose) => (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className=" h-44 lg:h-full relative group">
                {image ? (
                  <img src={image} className="h-full object-cover" />
                ) : null}

                <Link
                  className="absolute z-10 bg-[#695e4c] text-white h-10 w-full -bottom-[10px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 group-hover:bottom-0 left-0 flex items-center justify-center uppercase text-sm"
                  href={url}
                >
                  Xem chi tiết
                </Link>
              </div>
              <div className="py-5 px-8">
                <p className="text-lg font-semibold text-neutral-950 mb-3">
                  {name}
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <Rating
                    count={5}
                    defaultValue={Math.ceil(avg_star)}
                    readOnly
                  />
                  <p className="text-sm text-neutral-700">
                    ({total_review} đánh giá)
                  </p>
                </div>
                <p className="font-medium text-[#8d765a] mb-3">
                  {discount ? (
                    <>
                      <span className="line-through text-neutral-500 text-xs mr-2">
                        {formatCurrency(price)} VND
                      </span>
                      <span>
                        {formatCurrency(priceCurrent)}
                        VND
                      </span>
                    </>
                  ) : (
                    <span> {formatCurrency(price)} VND</span>
                  )}
                </p>
                <p className="text-sm text-neutral-800">{summary}</p>
                <p className="text-sm font-medium mt-6 flex items-center gap-2">
                  <FiCheck className="text-xl text-neutral-600" />
                  {formatCurrency(56)} sản phẩm
                </p>
                <ButtonAddCart
                  item={{
                    id,
                    name,
                    image,
                    price: priceCurrent,
                    quantity: 1,
                  }}
                />
                <ButtonCheckout
                  item={{
                    name,
                    id,
                    images: image,
                    price_current: priceCurrent,
                  }}
                />
              </div>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
