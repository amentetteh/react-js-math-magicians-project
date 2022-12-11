import process from '../util/Util';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   result:s      the running result
 *   next:String       the next number to be processd on with the result
 *   operator:String  +, -, etc.
 */
export default function calculate(obj, touchName) {
  if (isNumber(touchName)) {
    if (touchName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operator, update next
    if (obj.operator) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + touchName };
      }
      return { ...obj, next: touchName };
    }
    // If there is no operator, update next and clear the value
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + touchName,
        result: null,
      };
    }
    return {
      next: touchName,
      result: null,
    };
  }

  if (touchName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operator) {
      return { ...obj, next: '0.' };
    }
    if (obj.result) {
      if (obj.result.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.result}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (touchName === '=') {
    if (obj.next && obj.operator) {
      return {
        result: process(obj.result, obj.next, obj.operator),
        next: null,
        operator: null,
      };
    }
    // '=' with no operator, nothing to do
    return {};
  }

  if (touchName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.result) {
      return { ...obj, result: (-1 * parseFloat(obj.result)).toString() };
    }
    return {};
  }

  // Button must be an operator

  // When the user presses an operator button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.result) {
  //   return {};
  // }

  // User pressed an operator after pressing '='
  if (!obj.next && obj.result && !obj.operator) {
    return { ...obj, operator: touchName };
  }

  // User pressed an operator button and there is an existing operator
  if (obj.operator) {
    if (obj.result && !obj.next) {
      return { ...obj, operator: touchName };
    }
    if (!obj.result) {
      return { result: 0, operator: touchName };
    }

    return {
      result: process(obj.result, obj.next, obj.operator),
      next: null,
      operator: touchName,
    };
  }

  // no operator yet, but the user typed one

  // The user hasn't typed a number yet, just save the operator
  if (!obj.next) {
    return { operator: touchName };
  }

  // save the operator and shift 'next' into 'result'
  return {
    result: obj.next,
    next: null,
    operator: touchName,
  };
}
