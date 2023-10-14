export default function Badge(props: any) {
  const { count } = props;
  return (
    <div className="relative">
      {count > 0 ? (
        <span className="text-xs absolute bg-emerald-700 text-white w-4 h-4 rounded-full flex items-center justify-center -right-2 -top-1">
          {count}
        </span>
      ) : null}
      {props.children}
    </div>
  );
}
