"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function OTPField() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<any>(null);

  const handleChange = (e: any, index: number) => {
    const { value } = e.target;

    const newOTP = [...otp];
    newOTP[index] = value.substr(value.length - 1);
    if (!value) setActiveOTPIndex(index - 1);
    else setActiveOTPIndex(index + 1);
    setOtp(newOTP);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);
  return (
    <div className="flex items-center gap-x-2">
      {otp.map((_, index) => {
        return (
          <div key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              onChange={(e) => handleChange(e, index)}
              value={otp[index]}
              type="number"
              className={clsx({
                "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none spin-button-none [&::-webkit-inner-spin-button]:appearance-none ":
                  true,
                "w-12 h-14 border border-neutral-200 rounded bg-transparent outline-none text-center text-xl focus:text-gray-900 text-gray-900 transition":
                  true,
                "focus:ring-[#8d765a] focus:bg-white ring-1 transition-all duration-200 ring-transparent":
                  true,
              })}
            />
            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </div>
        );
      })}
    </div>
  );
}
