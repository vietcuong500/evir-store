import clsx from "clsx";

export const ProductCategoriesItem = (props: any) => {
  const { title, value, active, onClick } = props;
  return (
    <div
    onClick={onClick}
      className="flex items-center justify-between text-sm cursor-pointer"
    >
      <p
        className={clsx({
          "text-neutral-700 text-sm capitalize": true,
          "font-semibold": active,
        })}
      >
        {title}
      </p>
      <p
        className={clsx({
          "flex items-center transition-all duration-200 justify-center rounded-xl text-center text-xs w-8 h-5 border":
            true,
          "text-neutral-900 border-neutral-300 border": !active,
          "bg-emerald-700 text-white border-transparent": active,
        })}
      >
        {value}
      </p>
    </div>
  );
};
