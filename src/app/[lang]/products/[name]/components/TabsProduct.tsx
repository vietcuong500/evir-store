"use client";

import { useState } from "react";
import { Button, Input, Rating, Tabs, UserReview } from "@/components";
import { FiStar } from "react-icons/fi";
import ProductTabShipping from "./ProductTabShipping";

const tabs_menu = [
  {
    value: "description",
    label: "Giới thiệu",
  },
  {
    value: "review",
    label: "Đánh giá",
  },
  {
    value: "shipping",
    label: "Chính sách mua hàng",
  },
  // {
  //   value: "vendor",
  //   label: "vendor info",
  // },
];

const calcPercent = (total: number, sub: number) => {
  return Math.ceil((100 / total) * sub);
};

export default function TabsProduct(props: any) {
  const { data, customerReviews } = props;
  const { description, review } = data;
  const {
    avg_star,
    total_review,
    total_one_star,
    total_two_star,
    total_three_star,
    total_four_star,
    total_five_star,
  } = review;
  const [active, setActive] = useState("review");
  return (
    <div className="mt-12 mx-auto border-t border-r-neutral-300">
      <Tabs list={tabs_menu} value={active} onChange={setActive} />

      <div className="mt-4">
        {active === "description" && (
          <div
            className="text-neutral-800 mt-2 mb-3 text-sm"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}

        {active === "review" && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/5">
              <div className="flex gap-6">
                <div className="flex w-1/3 my-auto flex-col items-center">
                  <p className="text-sm text-neutral-700 font-medium mb-2">
                    Đánh giá
                  </p>

                  <p className="text-3xl font-semibold text-neutral-900">{avg_star}</p>
                  <div className="flex items-center">
                    <Rating
                      readOnly={true}
                      count={5}
                      defaultValue={Math.ceil(avg_star)}
                    />
                  </div>
                  <p className="text-sm text-neutral-700 mt-2">
                    {total_review} đánh giá
                  </p>
                </div>

                <div className="w-full text-sm font-medium text-neutral-900">
                  <div className="flex gap-2 items-center">
                    <span>5</span>
                    <div className="w-full h-3 bg-neutral-100 rounded-lg relative overflow-hidden">
                      <div
                        style={{
                          width: `${calcPercent(
                            total_review,
                            total_five_star
                          )}%`,
                        }}
                        className="absolute left-0 top-0 h-full bg-[#c7c8b4] rounded-lg"
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>4</span>
                    <div className="w-full h-3 bg-neutral-100 rounded-lg relative overflow-hidden">
                      <div
                        style={{
                          width: `${calcPercent(
                            total_review,
                            total_four_star
                          )}%`,
                        }}
                        className="absolute left-0 top-0 h-full bg-lime-500 rounded-lg"
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>3</span>
                    <div className="w-full h-3 bg-neutral-100 rounded-lg relative overflow-hidden">
                      <div
                        style={{
                          width: `${calcPercent(
                            total_review,
                            total_three_star
                          )}%`,
                        }}
                        className="absolute left-0 top-0 h-full bg-yellow-400 rounded-lg"
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>2</span>
                    <div className="w-full h-3 bg-neutral-100 rounded-lg relative overflow-hidden">
                      <div
                        style={{
                          width: `${calcPercent(
                            total_review,
                            total_two_star
                          )}%`,
                        }}
                        className="absolute left-0 top-0 h-full bg-orange-400 rounded-lg"
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>1</span>
                    <div className="w-full h-3 bg-neutral-100 rounded-lg relative overflow-hidden">
                      <div
                        style={{
                          width: `${calcPercent(
                            total_review,
                            total_one_star
                          )}%`,
                        }}
                        className="absolute left-0 top-0 h-full bg-amber-600 rounded-lg"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <p className="text-sm text-neutral-700 font-medium mb-2">
                Nhận xét
              </p>
              {customerReviews?.data.length === 0 ? (
                <p className="text-sm text-neutral-600">Chưa có nhận xét nào cho sản phẩm này</p>
              ) : null}

              <div className="flex flex-col gap-8 ">
                {customerReviews?.data.map((el: any, id: number) => (
                  <UserReview
                    key={id}
                    name={el.user.username}
                    content={el.content}
                    star={el.star}
                    date={el.create_at}
                  />
                ))}

                {/* <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="comment"
                    className="block mb-1 text-neutral-800 text-sm"
                  >
                    Comment
                    <sup className="text-red-600 ml-1">*</sup>
                  </label>
                  <Input id="comment" className="w-full" placeholder="" />
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-neutral-800 text-sm capitalize"
                    >
                      name
                      <sup className="text-red-600 ml-1">*</sup>
                    </label>
                    <Input id="name" className="w-full" placeholder="" />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block mb-1 text-neutral-800 text-sm capitalize"
                    >
                      Email
                      <sup className="text-red-600 ml-1">*</sup>
                    </label>
                    <Input id="email" className="w-full" placeholder="" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label
                    htmlFor="rating"
                    className="block text-neutral-800 text-sm capitalize"
                  >
                    Your rating
                  </label>
                  <Rating count={5} />
                </div>
                <Button className="w-fit">Post comment</Button>
              </div> */}
              </div>
            </div>
          </div>
        )}
        {active === "shipping" && <ProductTabShipping />}
      </div>
    </div>
  );
}
