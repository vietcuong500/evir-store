export default function ProductTabShipping(props: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 gap-2 h-[360px]">
        <div className="w-full h-full bg-neutral-100"></div>
        <div className="w-full h-full bg-neutral-100"></div>
      </div>
      <div className="text-sm flex flex-col gap-4">
        <div>
          <p className="uppercase text-lg font-semibold">MAECENAS IACULIS</p>
          <p className="text-neutral-800 mt-3">
            Vestibulum curae torquent commodo parturient penatibus nunc dui
            adipiscing convallis bulum parturient suspendisse parturient
            a.Parturient in parturient scelerisque a natoque adipiscing a
            vestibulum hendrerit et pharetra fames nunc natoque dui.
          </p>
        </div>
        <div>
          <p className="uppercase text-lg font-semibold">ADIPISCING CONVALLIS BULUM</p>
          <p className="text-neutral-800 mt-3">
            Vestibulum curae torquent commodo parturient penatibus nunc dui
            adipiscing convallis bulum parturient suspendisse parturient
            a.Parturient in parturient scelerisque a natoque adipiscing a
            vestibulum hendrerit et pharetra fames nunc natoque dui.
          </p>
        </div>
      </div>
    </div>
  );
}
