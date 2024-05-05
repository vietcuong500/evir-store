"use client";
import { usePagination } from "@/hooks/usePagination";
import clsx from "clsx";
import _ from "lodash";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface IPaginationProps {
  pageSize: number;
  count: number;
  onChange?: any;
}

export default function Pagination(props: any) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={`flex gap-2 ${className}`}>
      {/* Left navigation arrow */}
      <button
        disabled={currentPage < 2}
        onClick={onPrevious}
        className="w-9 h-9 outline-none disabled:bg-neutral-300 disabled:opacity-20 hover:bg-neutral-200 ring-1 ring-offset-2 ring-transparent focus:ring-neutral-600 focus-visible:ring-neutral-600 focus-within:ring-neutral-600 active:bg-neutral-200 border-neutral-200 border rounded shadow-sm flex-center "
      >
        <FiChevronLeft />
      </button>
      {paginationRange.map((pageNumber: any, id: number) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "-1") {
          return (
            <button
              key={id}
              className="w-9 h-9 outline-none hover:bg-neutral-200 ring-1 ring-offset-2 ring-transparent focus:ring-neutral-600 focus-visible:ring-neutral-600 focus-within:ring-neutral-600 active:bg-neutral-200 border-neutral-200 border rounded shadow-sm flex-center "
            >
              ...
            </button>
          );
        }

        // Render our Page Pills
        return (
          <button
            key={id}
            onClick={() => onPageChange(pageNumber)}
            className={clsx({
              "w-9 h-9 outline-none hover:bg-neutral-200 ring-1 ring-offset-2 ring-transparent focus:ring-neutral-600 focus-visible:ring-neutral-600 focus-within:ring-neutral-600 active:bg-neutral-200 border-neutral-200 border rounded shadow-sm flex-center ":
                true,
              "bg-neutral-200": pageNumber === currentPage,
            })}
          >
            {pageNumber}
          </button>
        );
      })}
      {/*  Right Navigation arrow */}
      <button
        disabled={currentPage === lastPage}
        onClick={onNext}
        className="w-9 h-9 disabled:bg-neutral-300 disabled:opacity-20 outline-none hover:bg-neutral-200 ring-1 ring-offset-2 ring-transparent focus:ring-neutral-600 focus-visible:ring-neutral-600 focus-within:ring-neutral-600 active:bg-neutral-200 border-neutral-200 border rounded shadow-sm flex-center "
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
