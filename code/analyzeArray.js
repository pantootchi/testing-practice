export default function analyzeArray(array) {
    return {
        average: array.reduce((sum, num) => sum + num, 0) / array.length,
        min: Math.min(...array),    //Use the spread operator because Mat.min() function espects a series of numbers and doesn't know how to handle an array
        max: Math.max(...array),
        length: array.length
    }
}