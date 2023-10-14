import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="">
      <div className="container mx-auto flex h-auto xl:h-[30rem] flex-wrap">
        <div className="w-11/12 xl:w-1/2 h-auto bg-neutral-100 p-8">
          <p className="mb-6 uppercase text-green-600 text-sm">
            mattis laoreet sapien
          </p>
          <h3 className="text-4xl font-semibold text-neutral-700 capitalize w-1/4">
            porta consectetur imperdiet frigilla
          </h3>
          <Link
            className="uppercase hover:text-neutral-900 border-b border-green-500 text-sm text-neutral-800 font-medium mt-4 inline-block"
            href="/news/mattis-laoreet-sapien"
          >
            read more
          </Link>
        </div>
        <div className="w-11/12 xl:w-1/2 flex flex-col h-full gap-y-8">
          <div className="h-1/2 w-full bg-neutral-100 p-5">
            <p className="mb-4 uppercase text-green-600 text-sm">semper</p>
            <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/3">
              feugiat scelerique imperdiet
            </h3>
            <Link
              className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
              href="/news/mattis-laoreet-sapien"
            >
              read more
            </Link>
          </div>
          <div className="flex items-stretch w-full h-1/2 gap-8">
            <div className="w-2/3 h-full bg-neutral-100 p-5">
              <p className="mb-4 uppercase text-green-600 text-sm">semper</p>
              <h3 className="text-2xl font-semibold text-neutral-700 capitalize w-1/2">
                adipiscing sodales
              </h3>
              <Link
                className="uppercase hover:text-neutral-900 border-b border-green-500 text-xs text-neutral-800 font-medium mt-2 inline-block"
                href="/news/mattis-laoreet-sapien"
              >
                read more
              </Link>
            </div>
            <div className="w-1/3 h-full bg-neutral-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
