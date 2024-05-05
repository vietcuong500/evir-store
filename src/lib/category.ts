import queryString from "query-string";

export async function getCategories(lang: string) {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/category/listing`,
    query: {
      languageCode: lang.toUpperCase(),
    },
  });
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store"
  });
  const data = await res.json();
  return data;
}
