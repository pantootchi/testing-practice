export default function caesarCipher(text, shift) {
    let encryptedText = '';
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.charCodeAt(0);
        const alphabetStart = isUpperCase ? 65 : 97;
        const shiftedCode = (charCode - alphabetStart + shift + 26) % 26 + alphabetStart;
        encryptedText += String.fromCharCode(shiftedCode);
      } else {
        encryptedText += char;
      }
    }
  
    return encryptedText;
  }