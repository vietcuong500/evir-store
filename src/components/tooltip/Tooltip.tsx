//placement title

export default function Tooltip(props: any) {
  const { title, placement } = props;
  return (
    <div className="relative group flex-center">
      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full transition-all duration-300 invisible group-hover:visible group-hover:bottom-[130%] left-[50%] -translate-x-[50%] min-w-[6rem] bg-neutral-900 h-7 flex-center text-white rounded-sm text-center text-sm shadow z-20">
        <div className="absolute w-full h-full flex-center z-20">
          <span className="text-xs text-white">{title}</span>
          <div
            className="absolute z-10 w-3 h-3 rounded bg-neutral-900 rotate-45 shadow -bottom-[10%] left-[50%] -translate-x-[50%]"
            id="arrow"
          ></div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
