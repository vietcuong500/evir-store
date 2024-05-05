import clsx from "clsx";

export default function Tabs(props: any) {
  const { list, onChange, value } = props;
  return (
    <div
      id="tabs-product"
      className="flex justify-center flex-nowrap whitespace-nowrap overflow-x-auto"
    >
      {list.map((el: any, id: number) => (
        <div
          key={id}
          id="tab-product-item"
          className="group cursor-pointer ml-6"
          onClick={() => onChange(el.value)}
        >
          <p
            id=""
            className={clsx({
              "w-0 group-hover:w-full h-1 bg-emerald-600 transition-all duration-300":
                true,
              "w-full": value === el.value,
            })}
          ></p>
          <p
            className={clsx({
              "uppercase text-neutral-600 py-3": true,
              "text-neutral-950": value === el.value,
            })}
          >
            {el.label}
          </p>
        </div>
      ))}
    </div>
  );
}
