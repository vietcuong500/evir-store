import Image from "next/image";

export default function NewsLetter() {
  return (
    <div className="bg-neutral-50 relative h-44">
      <div className="absolute w-full h-full top-0 left-0">
        <Image
          src="/banner-handmade.jpg"
          alt="banner"
          priority={true}
          sizes="100vw"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="w-full bg-neutral-700/10 h-full left-0 top-0 z-10 absolute">
        <div className="container py-6 xl:py-0 h-full mx-auto flex flex-col xl:flex-row items-center justify-between">
          <div className="text-center xl:text-left">
            <p className="uppercase text-green-600 text-sm">
              laoreet in vitas amet
            </p>
            <p className="text-2xl mt-0 xl:mt-4 font-medium text-neutral-800">
              Hey you, sign up and connect to{" "}
              <span className="text-green-700">Woodmart!</span>
            </p>
          </div>
          <div className="flex mt-4 xl:mt-0 items-stretch gap-4">
            <input
              className="ring-1 ring-neutral-400 active:ring-green-700 focus:ring-green-700 transition-all duration-200 hover:ring-green-600 px-4 py-2 h-10 bg-transparent rounded outline-none"
              placeholder="Leave your email"
              type="text"
            />
            <button className="px-4 py-2 hover:bg-green-800 active:ring-2 transition-all duration-300 active:ring-lime-500 rounded shadow-sm bg-green-600 text-white uppercase font-medium text-sm">
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
