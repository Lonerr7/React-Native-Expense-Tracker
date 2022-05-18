export const countTotalPrice = (arr) =>
  arr.reduce((prev, current) => {
    return prev + current.price;
  }, 0);

export const filterDates = (arr) => {
  const now = Date.now();

  return arr.filter(
    (item) => Math.floor((now - item.date) / (1000 * 60 * 60 * 24)) <= 7
  );
};
