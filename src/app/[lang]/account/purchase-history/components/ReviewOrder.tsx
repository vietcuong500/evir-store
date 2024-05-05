"use client";

import { Rating } from "@/components";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export default function ReviewOrder(props: any) {
  const { orderDetails, orderId } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [reviews, setReviews] = useState(
    orderDetails?.map((el: any) => ({
      order_detail_id: el.id,
      content: "",
      star: 5,
      name: el.product.name,
      image: el.product.images,
    })) || []
  );

  return (
    <div>
      <button
        onClick={onOpen}
        className="px-2 py-1 text-sm bg-neutral-200 hover:bg-neutral-300"
      >
        Đánh giá sản phẩm
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Đánh giá sản phẩm
              </ModalHeader>
              <ModalBody className="max-h-[500px] overflow-auto">
                <div>
                  {reviews.map((el: any, id: number) => (
                    <div key={id}>
                      <div className="flex gap-4 mb-4">
                        <Image
                          src={el.image}
                          width={56}
                          height={56}
                          alt={el.name}
                        />
                        <p className="text-sm font-medium mt-2">{el.name}</p>
                      </div>
                      <div>
                        <Textarea
                          isRequired
                          label="Nhận xét"
                          labelPlacement="outside"
                          placeholder="Enter your description"
                          className="w-full"
                          value={el.content}
                          onChange={(e) =>
                            setReviews(
                              reviews.map((rv: any, idx: number) =>
                                idx === id
                                  ? { ...rv, content: e.target.value }
                                  : rv
                              )
                            )
                          }
                        />
                        <div>
                          <label htmlFor="" className="font-medium text-sm">
                            Đánh giá
                          </label>
                          <Rating
                            count={5}
                            onChange={(e) =>
                              setReviews(
                                reviews.map((rv: any, idx: number) =>
                                  idx === id ? { ...rv, star: e } : rv
                                )
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  color="primary"
                  className="text-sm bg-green-700 h-9 px-4 py-1 text-white rounded-sm hover:bg-green-800"
                  onClick={async () => {
                    const token = getCookie("token");
                    let not_review = [];
                    let has_review = [];
                    let review_old: any = [];
                    const temp: any = await fetch(
                      `${
                        process.env.NEXT_PUBLIC_API_URL
                      }/review/reviewed?order_id=${Number(orderId)}`,
                      {
                        method: "GET",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    ).then(res => res.json());

                    if (temp.code === 200) {
                      if (temp.data.length > 0) {
                        review_old = temp.data;
                        const ids_reviewed: any[] = temp.data.map(
                          (el: any) => el.order_detail.id
                        );
                        not_review = reviews.filter(
                          (el: any) =>
                            !ids_reviewed.includes(el.order_detail_id)
                        );
                        has_review = reviews.filter((el: any) =>
                          ids_reviewed.includes(el.order_detail_id)
                        );
                      }
                      else {
                        not_review = reviews;
                      }
                    }
                    Promise.all(
                      not_review.map(async (el: any) => {
                        const { order_detail_id, content, star } = el;
                        const res: any = await fetch(
                          `${process.env.NEXT_PUBLIC_API_URL}/review`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Accept: "application/json",
                              Authorization: `Bearer ${token}`,
                            },
                            body: JSON.stringify({
                              order_detail_id,
                              content,
                              star,
                            }),
                          }
                        );
                        // if (res.code === 200) {
                        //   enqueueSnackbar({
                        //     message: "Đánh giá sản phẩm thành công",
                        //     variant: "success",
                        //   });
                        //   onClose();
                        // } else {
                        //   enqueueSnackbar({
                        //     message: "Đánh giá sản không thành công",
                        //     variant: "error",
                        //   });
                        // }
                      })
                    );

                    Promise.all(
                      has_review.map(async (el: any) => {
                        const { order_detail_id, content, star } = el;
                        const id = review_old.find((el: any) => el.order_detail.id === order_detail_id).id;
                        const res: any = await fetch(
                          `${process.env.NEXT_PUBLIC_API_URL}/review/${id}`,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type": "application/json",
                              Accept: "application/json",
                              Authorization: `Bearer ${token}`,
                            },
                            body: JSON.stringify({
                              content,
                              star,
                            }),
                          }
                        );
                      })
                    );
                    enqueueSnackbar({
                      message: "Đánh giá sản phẩm thành công",
                      variant: "success",
                    });
                    onClose();
                  }}
                >
                  Hoàn thành
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
