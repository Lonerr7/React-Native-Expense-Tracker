export const countTotalPrice = (arr) =>
  arr.reduce((prev, current) => prev.price + current.price);
