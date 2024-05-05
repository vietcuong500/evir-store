//-translate-x-full

"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useClickAway } from "react-use";

interface IDrawerProps {
  placement: "left" | "right";
  open: Boolean;
  setOpen: any;
  children?: any;
  className?: string;
}

export default function Drawer(props: IDrawerProps) {
  const { placement, open, setOpen, className } = props;

  const drawer = useRef(null);

  useClickAway(drawer, () => {
    if (open) setOpen();
  });

  useEffect(() => {
    if (open) {
      document.querySelector("html")?.classList.add("overflow-hidden");
    } else {
      document.querySelector("html")?.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div>
      <div
        id="backdrop"
        className={clsx({
          "fixed h-screen w-screen bg-neutral-900/50 z-[20] top-0 left-0":
            true,
          "invisible opacity-0": !open,
          "visible opacity-100": open,
        })}
      ></div>
      <div
        ref={drawer}
        id="drawer-example"
        className={clsx({
          "fixed top-0 z-[200] h-screen overflow-y-auto transition-all duration-300 bg-white w-96 dark:bg-gray-800":
            true,
          "left-0": open && placement === "left",
          "-left-full": !open && placement === "left",
          "right-0": open && placement === "right",
          "-right-full": !open && placement === "right",
          "visible opacity-100": open,
          "invisible opacity-0": !open,
          className: true,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}
