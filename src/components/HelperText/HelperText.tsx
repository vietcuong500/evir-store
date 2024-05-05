"use client";

interface HelperTextProps {
  message?: string | any;
  error?: boolean;
  className?: string;
}

export default function HelperText(props: HelperTextProps) {
  const { message, error, className } = props;
  if (message)
    return (
      <span
        className={`text-xs italic mt-1 ${
          error ? "text-red-400" : "text-[#919191]"
        } ${className}`}
      >
        {message}
      </span>
    );
  return null;
}
