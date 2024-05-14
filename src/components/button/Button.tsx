import clsx from "clsx";

export default function Button(props: any) {
  const { className, loading, disabled, ...rest } = props;
  return (
    <button
      className={clsx(
        "px-4 py-2 h-10 whitespace-nowrap hover:bg-[#655540] ring-1 ring-transparent transition-all duration-300 active:ring-[#655540] focus-visible:ring-[#655540] rounded shadow-sm bg-[#8d765a] text-white uppercase font-medium outline-none focus-within:ring-green-900 focus:ring-green-900 text-sm",
        "disabled:bg-neutral-700 disabled:bg-opacity-40",
        "flex items-center justify-center",
        { "opacity-30 bg-[#695e4c]": loading },
        className
      )}
      {...rest}
      disabled={loading | disabled}
    >
      {loading ? (
        <div className="mr-2">
          <svg
            className="animate-spin w-6 h-6 fill-slate-800"
            viewBox="3 3 18 18"
          >
            <path
              className="opacity-20"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            ></path>
            <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
          </svg>
        </div>
      ) : null}
      {props.children}
    </button>
  );
}
