export const countTotalPrice = (arr) =>
  arr.reduce((prev, current) => {
    return prev + current.price;
  }, 0);

export const filterDates = (arr) => {
  const now = Date.now();

  return arr.filter(
    (item) =>
      Math.floor((now - new Date(item.date)) / (1000 * 60 * 60 * 24)) <= 7
  );
};

export const validateInput = (price, date, title) => {
  const validPice = !isNaN(price) && price > 0;
  const validDate = date.toString() !== 'Invalid Date';
  const validTitle = title.trim().length > 0;

  if (validDate && validPice && validTitle) {
    return true;
  }

  return false;
};
