import { NewsCard, NewsLetter } from "@/components/index";
import Link from "../../../node_modules/next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-neutral-100 py-6 text-center">
        <p className="text-4xl text-black text-center">Blog</p>
        <p className="mt-3 text-sm uppercase text-neutral-800">
          <Link className="hover:text-emerald-900" href="/">
            home
          </Link>{" "}
          /{" "}
          <Link className="hover:text-emerald-900" href="/blog">
            Blog
          </Link>
        </p>
      </div>
      <div className="container mt-8 mx-auto">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
