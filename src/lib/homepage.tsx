export const getConfigHomePage = async (lang: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/home/get-config`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  if (data) {
    const config = data.data.find((el: any) => el.key === "homepage");
    if (config) return JSON.parse(config.value)[lang];
  }

  return null;
};
