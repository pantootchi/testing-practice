import capitalize from '../code/capitalize.js';

test('capitalizes the first letter of a string', () => {
    expect(capitalize('pat')).toBe('Pat');
    expect(capitalize('Nicole')).toBe('Nicole');
    expect(capitalize('ranDZ')).toBe('RanDZ');
})