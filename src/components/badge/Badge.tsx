export default function Badge(props: any) {
  const { count } = props;
  return (
    <div className="relative">
      {count > 0 ? (
        <span className="text-xs border-3 box-border border-white absolute bg-[#584f3f] text-white w-5 h-5 rounded-full flex items-center justify-center -right-2 -top-1">
          {count}
        </span>
      ) : null}
      {props.children}
    </div>
  );
}
