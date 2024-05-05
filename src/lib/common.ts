export const calcPriceCurrent = (
  price: number,
  discount: number,
  discount_type: string
) => {
  if (discount_type === "FIXED") return price - discount;
  else {
    const sub = (price / 100) * discount;
    return price - sub;
  }
};
