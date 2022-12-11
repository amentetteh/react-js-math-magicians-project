import Big from 'big.js';

const process = (a, b, operation) => {
  let result = 0;
  const one = Big(a);
  const two = Big(b);
  switch (operation) {
    case 'x':
      result = one.times(two).toString();
      break;
    case '+':
      result = one.plus(two).toString();
      break;
    case '-':
      result = one.minus(two).toString();
      break;
    case '/':
      try {
        result = one.div(two).toString();
      } catch (err) {
        result = 'N/A';
      }
      break;
    case '%':
      try {
        result = one.mod(two).toString();
      } catch (err) {
        result = 'N/A';
      }
      break;
    default:
      result = 0;
  }
  return result;
};
export default process;
