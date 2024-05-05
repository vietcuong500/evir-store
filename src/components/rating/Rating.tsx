"use client";

import { GoStarFill } from "react-icons/go";
import _ from "lodash";
import { useState } from "react";
import clsx from "clsx";

interface IRatingProps {
  count: number;
  defaultValue?: number;
  readOnly?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  onChange?: (value: any) => void;
}

export default function Rating(
  props: IRatingProps = {
    count: 5,
    defaultValue: 4,
    readOnly: true,
    className: "",
    size: "md",
  }
) {
  const { count, defaultValue, readOnly, className, size, onChange } = props;
  const [value, setValue] = useState(defaultValue || 0);
  const [rating, setRating] = useState<number>(defaultValue || 0);
  return (
    <ul className={`flex items-center ${className}`}>
      {_.range(0, count).map((el: any, id: number) => (
        <li
          onMouseEnter={() => {
            if (!readOnly) setValue(id + 1);
          }}
          onMouseLeave={() => {
            if (!readOnly) setValue(rating);
          }}
          onDoubleClick={() => {
            if (!readOnly) {
              setRating(0);
              setValue(0);
            }
          }}
          onClick={() => {
            if (!readOnly) {
              setRating(id + 1);
              if (onChange) onChange(id + 1);
            }
          }}
          key={id}
          className={clsx({
            "text-xl w-6 flex-center h-6 cursor-pointer transition-all duration-200":
              true,
            "text-yellow-400": id <= ((rating - 1 && value - 1) || value - 1),
            "text-neutral-300": id > ((rating - 1 && value - 1) || value - 1),
            "!w-4 !h-4": size === "sm",
            "hover:text-yellow-400": !readOnly,
          })}
        >
          <GoStarFill
            className={clsx({
              "w-3 h-3": size === "sm",
            })}
          />
        </li>
      ))}
    </ul>
  );
}
