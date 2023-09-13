import reverseString from '../code/reverseString';

test('reverses inputted string', () => {
    expect(reverseString('patrisha')).toBe('ahsirtap');
    expect(reverseString('Nicole')).toBe('elociN');
    expect(reverseString('ranDZ')).toBe('ZDnar');
});