"use client";

import { Pagination, UserReview } from "@/components";
import queryString from "query-string";
import { use, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BlogComment from "./BlogComment";

//filter_post_id
const getComment = async (id: number, page: number, page_size: number) => {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog-comment`,
    query: {
      filter_post_id: id,
      page,
      page_size,
    },
  });
  const res = await fetch(url, {
    next: {
      tags: ["comment-blog"],
    },
  });
  const data = await res.json();
  return data;
};

export default function ProductReview(props: any) {
  const { id } = props;
  const [params, setParams] = useState({
    page: 1,
    page_size: 5,
  });
  // const comments = use(getComment(id, params.page, params.page_size));
  const {
    data: comments,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["blog-comment", id, params],
    queryFn: () => getComment(Number(id), params.page, params.page_size),
    staleTime: 5 * 1000,
  });
  return (
    <>
      <div className="my-8">
        <p className="uppercase text-xl text-neutral-900 mb-3 font-[playfair]">
          Nhận xét
        </p>

        <div className="mt-6 flex flex-col gap-8">
          {comments?.data.map((el: any, id: number) => (
            <UserReview
              key={id}
              name={el.user?.username}
              content={el.content}
              date={el.create_at}
            />
          ))}
        </div>
        {comments ? (
          <Pagination
            className="mt-4 justify-center"
            totalCount={comments?.total}
            currentPage={params.page}
            onPageChange={(page_new: number) =>
              setParams({ ...params, page: page_new })
            }
            pageSize={params.page_size}
          />
        ) : null}
      </div>
      <BlogComment postId={id} refetch={refetch} />
    </>
  );
}
