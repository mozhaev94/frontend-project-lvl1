export const randomNumber = (num) => (Math.floor(Math.random() * num));
export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return String(operators[randomNumber(3)]);
};

export const randomCollection = () => {
  let lengthCollection = randomNumber(13);
  const minimalLength = 5;
  if (lengthCollection < minimalLength) {
    lengthCollection = minimalLength;
  }
  const result = [];
  const startNumber = randomNumber(100);
  const step = randomNumber(30);
  let itemCollection = startNumber;
  for (let i = 0; i < lengthCollection; i += 1) {
    result.push(itemCollection);
    itemCollection += step;
  }
  return result;
};
