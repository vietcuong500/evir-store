export const formatCurrency = (
  num: any,
  suffixes = "",
  positionSuffixes = "right",
  separate = ","
) => {
  if (num) {
    const s = num.toString();
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    return positionSuffixes === "right"
      ? s.replace(regex, separate) + suffixes
      : suffixes + s.replace(regex, separate);
  } else {
    return 0;
  }
};
