export const getPages = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/page`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store"
  }).then((res) => res.json());
};

export const getPage = async (id: number) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/page/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store"
  }).then((res) => res.json());
};
