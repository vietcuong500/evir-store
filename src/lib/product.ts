"use server";

import { cookies } from "next/headers";
import queryString from "query-string";
import { calcPriceCurrent } from "./common";

interface IParams {
  page: number;
  page_size: number;
}

const paramsInit = {
  page: 1,
  page_size: 12,
};

export const getProducts = async (params: any) => {
  const { collection, page, page_size, keyword, lang } = params;
  let query: any = {
    ...paramsInit,
    page,
    page_size,
    keyword,
    languageCode: lang.toUpperCase(),
    filter_status: "ACTIVE"
  };

  if (collection) {
    query = {
      ...query,
      filter_category_id: Number(params.collection),
    };
  }
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/product/listing`,
    query,
  });
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store"
  });
  const data = await res.json();
  if (data.code === 200 || data.code === 0) {
    const result = data.data.map((el: any) => {
      const { price, discount } = el;
      let price_current = price;
      if (discount) {
        price_current = calcPriceCurrent(
          price,
          Number(discount.value),
          discount.type
        );
      }

      return {
        ...el,
        price_current,
      };
    });

    return {
      ...data,
      data: result,
    };
  }
  return data;
};

export const getProductsDiscount = async (params: any) => {
  const { collection, page, page_size, keyword, lang } = params;
  let query: any = {
    ...paramsInit,
    page,
    page_size,
    keyword,
    languageCode: lang.toUpperCase(),
  };
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/product/listing-promotion`,
    query,
  });
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store"
  });
  const data = await res.json();
  if (data.code === 200 || data.code === 0) {
    const result = data.data.map((el: any) => {
      const { price, discount } = el;
      let price_current = price;
      if (discount) {
        price_current = calcPriceCurrent(
          price,
          Number(discount.value),
          discount.type
        );
      }

      return {
        ...el,
        price_current,
      };
    });

    return {
      ...data,
      data: result,
    };
  }
  return data;
};

export const getRandomProducts = async (lang: string) => {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/product/suggesting/1`,
    query: {
      languageCode: lang?.toUpperCase() || "VI",
      filter_status: "ACTIVE"
    },
  });
  const res = await fetch(url, {
    method: "GET",
    cache: "no-store"
  });

  const data = await res.json();
  if (data.code === 200 || data.code === 0) {
    const result = data.data.map((el: any) => {
      const { price, discount } = el;
      let price_current = price;
      if (discount) {
        price_current = calcPriceCurrent(
          price,
          Number(discount.value),
          discount.type
        );
      }

      return {
        ...el,
        price_current,
      };
    });

    return {
      ...data,
      data: result,
    };
  }
  return data;
};

export const getProduct = async (id: Number, lang: string) => {
  const url = queryString.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_URL}/product/detail/` + id,
    query: {
      languageCode: lang.toUpperCase(),
    },
  });
  const res = await fetch(url, {
    cache: "no-store"
  });
  const data = await res.json();
  if (data.code === 200) {
    const result = data.data;
    const { price, discount, lst_image } = result;
    let price_current = price;
    if (discount) {
      price_current = calcPriceCurrent(price, discount.value, discount.type);
    }
    return {
      ...data,
      data: {
        ...result,
        price_current,
        lst_image: Array.isArray(lst_image) ? lst_image : [],
      },
    };
  }
  return null;
};
