import clsx from "clsx";
import { FiSearch } from "react-icons/fi";

export default function Input(props: any) {
  const { className, iconStart, iconEnd, ...rest } = props;
  return (
    <div
      className={clsx({
        "h-10 w-full min-w-[10rem] px-3 py-1 bg-white rounded": true,
        "border border-neutral-200": true,
        "focus-within:ring-green-600 focus-within:bg-white ring-1 transition-all duration-200 ring-transparent":
          true,
        "flex items-center": true,
      })}
    >
      {iconStart ? <div className="mr-2">{iconStart}</div> : null}

      <input
        className={`h-full bg-transparent w-full ring-neutral-200 placeholder:text-sm placeholder:text-neutral-600  outline-none ${className}`}
        placeholder=""
        type="text"
        {...rest}
      />
      {iconEnd ? <div className="">{iconEnd}</div> : null}
    </div>
  );
}
