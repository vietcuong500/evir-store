import Link from "next/link";
import queryString from "query-string";

export default function PostsCategory(props: any) {
  const { data, lang } = props;
  return (
    <div className="pb-4 mb-4 border-b border-e-neutral-300">
      <p className="text-2xl font-medium text-neutral-900 font-[playfair]">
        Danh mục
      </p>
      <ul className="flex flex-col gap-3 text-sm text-neutral-800 mt-4">
        {data.map((el: any, id: number) => (
          <li key={id}>
            <Link
              href={queryString.stringifyUrl({
                url: `/${lang}/blog`,
                query: {
                  page: 1,
                  category: el.id,
                  page_size: 9,
                },
              })}
              className="hover:text-lime-800"
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
