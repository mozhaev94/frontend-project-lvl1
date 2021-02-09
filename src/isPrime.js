export default (num) => {
  const stack = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      stack.push(i);
    }
  }
  if (stack.length === 2) {
    return true;
  } return false;
};
