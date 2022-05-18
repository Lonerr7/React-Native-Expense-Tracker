export const countTotalPrice = (arr) =>
  arr.reduce((prev, current) => {
    return prev + current.price;
  }, 0);
