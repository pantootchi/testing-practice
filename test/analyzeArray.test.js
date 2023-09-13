import analyzeArray from '../code/analyzeArray.js';

test('takes an array of numbers and outputs it average, min, max, and length', () => {
    expect(analyzeArray([2,7,1,2])).toEqual({average: 3, min: 1, max: 7, length: 4});
    expect(analyzeArray([2,7,1,-2])).toEqual({average: 2, min: -2, max: 7, length: 4});
    expect(analyzeArray([0,0,97,-8])).toEqual({average: 22.25, min: -8, max: 97, length: 4});
})