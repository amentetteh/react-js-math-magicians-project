import Big from 'big.js';

const process = (a, b, operation) => {
  let result;
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
    case '÷':
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
      throw Error(`Unknown operation '${operation}'`);
  }
  return result;
};
export default process;
