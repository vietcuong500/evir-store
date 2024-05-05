"use client";

import { useCountdown } from "@/hooks/useCountdown";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function Countdown(props: any) {
  const { timer, onFinish, className } = props;
  const [days, hours, minutes, seconds] = useCountdown(timer);

  useEffect(() => {
    if (days + hours + minutes + seconds <= 0) {
      if (onFinish) {
        onFinish();
      }
    }
  }, [days, hours, minutes, seconds, onFinish]);

  return (
    <div className={`${className}`}>
      {/* <span>{days > 10 ? days : `0${days}`}:</span> */}
      <span>{hours >= 10 ? hours : `0${hours}`}:</span>
      <span>{minutes >= 10 ? minutes : `0${minutes}`}:</span>
      <span>{seconds >= 10 ? seconds : `0${seconds}`}</span>
    </div>
  );
}
