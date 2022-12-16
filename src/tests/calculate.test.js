import calculate from '../logic/calculate';

describe('Tests calculate function', () => {
  const initialValues = { result: '8', next: '9', operator: 'x' };
  let res = {};

  test('Should reset to null on AC button clicked', () => {
    res = calculate(initialValues, 'AC');
    expect(res).toEqual({ result: null, next: null, operator: null });
  });

  test('Should update next when a number button is clicked and there is no operator', () => {
    res = calculate(res, '6');
    expect(res).toEqual({ result: null, next: '6' });
  });

  test('Should update result when an operator button is clicked', () => {
    res = calculate(res, 'x');
    expect(res).toEqual({ result: '6', next: null, operator: 'x' });
  });

  test('Should update next when a number button is clicked and operator is present', () => {
    res = calculate(res, '8');
    expect(res).toEqual({ result: '6', next: '8', operator: 'x' });
  });

  test('Should update next when a number button is clicked again for a second digit number', () => {
    res = calculate(res, '3');
    expect(res).toEqual({ result: '6', next: '83', operator: 'x' });
  });

  test('Should update result when equal button is clicked for result', () => {
    res = calculate(res, '=');
    expect(res).toEqual({ result: '498', next: null, operator: null });
  });
});
