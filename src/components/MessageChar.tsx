"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiX } from "react-icons/fi";
import { useToggle } from "react-use";
import messImg from "../../public/logo-mess.png";

function MessageChar() {
  const [isShow, setShow] = useToggle(true);
  return (
    <div>
      <div className="fixed right-12 bottom-20 ">
        <div className="relative top-0 group right-0 flex flex-col items-end gap-4">
          {isShow ? (
            <div className="border relative border-neutral-400 px-4 py-2 bg-white rounded">
              <FiX
                onClick={() => setShow()}
                className="cursor-pointer absolute -top-6 right-0 w-5 h-5"
              />
              <p>How we can help you</p>
              <div className="absolute -bottom-2 w-3 h-3 bg-white border border-neutral-400 border-t-0 border-l-0 right-4 rotate-45"></div>
            </div>
          ) : null}
          <div className="cursor-pointer">
            <Link href="https://www.google.com/url?q=https://www.facebook.com/eviromet/&sa=D&source=editors&ust=1715359746363179&usg=AOvVaw3XYAtVT1JU3B88RXL68lC5">
              <Image src={messImg} width={50} height={50} alt="Message Char" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageChar;
