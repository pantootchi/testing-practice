import caesarCipher from '../code/caesarCipher.js';

test('shifts letters in a message using a given key', () => {
    expect(caesarCipher('Pat', 3)).toBe('Sdw');
    expect(caesarCipher('Pat', -3)).toBe('Mxq');
    expect(caesarCipher('Odin $ Project!', 25)).toBe('Nchm $ Oqnidbs!');
    expect(caesarCipher('Odin $ Project!', -25)).toBe('Pejo $ Qspkfdu!');
});