export const randomNumber = (num) => (Math.floor(Math.random() * num));
export const randomOperator = () => {
  const operators = ['+', '-', '*'];
  return String(operators[randomNumber(3)]);
};
