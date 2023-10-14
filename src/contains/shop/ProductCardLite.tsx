export default function ProductCardLite() {
  return (
    <div className="flex gap-4">
      <div className=" cursor-pointer w-16 h-[4.5rem] bg-neutral-200 rounded overflow-hidden"></div>
      <div>
        <p className="text-neutral-600">Christmas Trr</p>
        <p className="text-sm text-green-700 mt-2">$249.00 USD</p>
      </div>
    </div>
  );
}
