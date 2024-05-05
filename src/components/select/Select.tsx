"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useClickAway, useToggle } from "react-use";

interface ISelectProps {
  options: any;
  defaultValue?: any;
  onChange: any;
  value?: any;
}

export default function Select(props: ISelectProps) {
  const { options, defaultValue, onChange, value } = props;
  const [open, setOpen] = useToggle(false);
  const selectButtonRef = useRef(null);

  useClickAway(selectButtonRef, () => {
    if (open) setOpen();
  });

  const [currentValue, setCurrentValue] = useState<any>(defaultValue);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div
      id="custom-select"
      className={clsx({
        "text-sm relative h-9  min-w-[9rem] rounded": true,
        "outline-none ring-1 ring-offset-1 ring-transparent hover:ring-neutral-400 focus:ring-neutral-400 focus-visible:ring-neutral-400 focus-within:ring-neutral-400 active:ring-neutral-400":
          true,
      })}
      ref={selectButtonRef}
    >
      <button
        onClick={setOpen}
        className={clsx({
          "flex outline-none items-center justify-between  w-full h-full border-b border-neutral-200 px-4 py-2":
            true,
        })}
        id="select-button"
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
      >
        <span className="inline-block">
          {currentValue
            ? options.find((el: any) => el.value === currentValue)?.label
            : "Sắp xếp"}
        </span>
        <span className="inline-block">
          <FiChevronDown />
        </span>
      </button>
      <ul
        role="listbox"
        id="select-dropdown"
        className={clsx({
          "absolute w-full top-full  left-0 transition-all duration-150  bg-white z-20 mt-1 shadow rounded":
            true,

          "visible opacity-100": open,
          "invisible opacity-0": !open,
        })}
      >
        {options.map((el: any, id: number) => (
          <li
            onClick={() => {
              setCurrentValue(el.value);
              onChange(el.value);
              setOpen();
            }}
            key={id}
            role="option"
            className={clsx({
              "px-4 py-1 hover:bg-neutral-100 cursor-pointer": true,
              "bg-neutral-200": currentValue === el.value,
            })}
          >
            <span>{el.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
