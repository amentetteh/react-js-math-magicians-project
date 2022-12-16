import process from '../util/Util'

describe('Test for operation', () => {

  it('multiply', () => {
    const result = process('5', '12', 'x');
    expect(result).toBe('60');
  });

  it('subtract', () => {
    const result = process('23', '2', '-');
    expect(result).toBe('21');
  });

  it('add', () => {
    const result = process('7', '2', '+');
    expect(result).toBe('9');
  });

  it('divide', () => {
    const result = process('15', '2', '÷');
    expect(result).toBe('7.5');
  });

  it('divide by zero', () => {
    const result = process('1225', '0', '÷');
    expect(result).toBe("N/A");
  });

  it('modulus', () => {
    const result = process('15', '2', '%');
    expect(result).toBe('1');
  });

  it('modulus by zero', () => {
    const result = process('5', '0', '%');
    expect(result).toBe("N/A");
  });

  it('Invalid operation', () => {
    expect(() => process('77', '3', '@')).toThrow();
  });
});