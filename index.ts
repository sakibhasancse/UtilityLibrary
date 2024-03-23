import { reverseString, countSubstring, deepMerge, formatDate } from "./UtilityLibrary";


// Example usage
console.log(reverseString('hello')); // olleh
console.log(countSubstring('hello world', 'o')); // 2
console.log(formatDate(new Date(), 'Asia/Dhaka'));

const obj1 = {
    a: 1,
    b: 'hello',
    c: {
        d: 'world',
        e: [1, 2, 3]
    },
    f: [4, 5]
};

const obj2 = {
    b: 'updated',
    c: {
        e: [4, 5]
    },
    f: ['a', 'b'],
    g: { h: 'test' }
};
console.log(deepMerge(obj1, obj2));