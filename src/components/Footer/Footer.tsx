import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";
import { FiSmartphone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="py-8">
      <div className="container mx-auto flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/2 flex  gap-6">
          <div className="w-1/2">
            <h4 className="text-3xl font-semibold text-neutral-950">
              woodmart.
            </h4>
            <p className="text-neutral-700 mt-2 mb-4 text-sm">
              Condimentum adipiscing vel neque dis nam parturient orci at
              scelerisque neque dis nam parturient.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-neutral-800">
                <CiLocationArrow1 />
                451 Wall Street, UK, London
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-800">
                <FiSmartphone />
                Phone: (064) 332 1233{" "}
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-800">
                <FiMail /> Fax: (098) 452 1721{" "}
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <p className="uppercase font-medium text-neutral-950">
              recent posts
            </p>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-stretch gap-4">
                <div className="w-20 h-14 bg-neutral-100"></div>
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-neutral-950">
                    New home decor from John Doerson
                  </p>
                  <p className="text-xs text-neutral-700">June 16, 2017</p>
                </div>
              </div>
              <div className="flex items-stretch gap-4">
                <div className="w-20 h-14 bg-neutral-100"></div>
                <div className="flex flex-col justify-between">
                  <p className="text-sm text-neutral-950">
                    New home decor from John Doerson
                  </p>
                  <p className="text-xs text-neutral-700">June 16, 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 flex gap-6">
          <div className="w-1/3">
            <p className="uppercase font-medium text-neutral-950">our stores</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">New York</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">London SF</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Cockfosters BP</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Chicago</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Las Vegas</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <p className="uppercase font-medium text-neutral-950">
              usefull links
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">New York</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">London SF</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Cockfosters BP</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Chicago</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Las Vegas</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <p className="uppercase font-medium text-neutral-950">menu</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">New York</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">London SF</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Cockfosters BP</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Chicago</Link>
              </li>
              <li className="text-sm text-neutral-600 hover:text-neutral-950">
                <Link href="/new-york">Las Vegas</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
