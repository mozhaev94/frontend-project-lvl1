export default (num1, num2) => {
  let divisior = 1;
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisior = i;
    }
  }
  return divisior;
};
