import Image from "next/image";
import { Button, Input } from "@/components";
import { FiMail } from "react-icons/fi";

export default function NewsLetter() {
  return (
    <div className="bg-neutral-50 relative h-56">
      <div className="absolute w-full h-full top-0 left-0">
        <Image
          src="https://eviromet.com/files/v1/viewFile/fed99212-d72b-4236-b38e-4a6ea808df07_banner-handmade.jpg"
          alt="banner"
          priority={true}
          sizes="100vw"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="w-full bg-neutral-700/10 h-full left-0 top-0 z-10 absolute">
        <div className="container py-6 xl:py-0 h-full mx-auto flex flex-col xl:flex-row items-center justify-center xl:justify-between">
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
            <Input iconStart={<FiMail className="text-neutral-600" />} />
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
