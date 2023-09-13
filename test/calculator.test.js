import calculator from '../code/calculator.js';


test('adds 2 numbers together', () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.add(0,0)).toBe(0);
    expect(calculator.add(-12, 4)).toBe(-8);
});

test('subtracts 2 numbers together', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
    expect(calculator.subtract(20, 5)).toBe(15);
    expect(calculator.subtract(-12,4)).toBe(-16);

});

test('divides a number by another number', () => {
    expect(calculator.divide(1,2)).toBe(0.5);
    expect(calculator.divide(0,0)).toBeFalsy();
    expect(calculator.divide(1,0)).toBe(Infinity);
});

test('multiply 2 numbers together', () => {
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.multiply(20,5)).toBe(100);
    expect(calculator.multiply(-12,4)).toBe(-48);
});