export default function reverseString(string) {
    const newStr = string.split("").reverse().join("")
    return newStr;
}