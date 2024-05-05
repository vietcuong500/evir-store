"use client";

import { useState } from "react";

export default function RangeSlider() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(40);
  return (
    <div className="w-24 relative">
      <input
        type="range"
        min="0"
        max="100"
        className="appearance-none accent-orange-800 absolute w-full  left-0 top-0"
        value={minVal}
        onChange={(e) => setMinVal(+e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="100"
        className="appearance-none bg-transparent accent-neutral-700 absolute w-full left-0 top-0"
        value={maxVal}
        onChange={(e) => setMaxVal(+e.target.value)}
      />
    </div>
  );
}
