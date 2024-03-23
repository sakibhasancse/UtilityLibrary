# UtilityLibrary

A utility library for common operations such as string manipulation, object merging, and date/time formatting.

## Installation

The `UtilityLibrary` is not published as an npm package. To use it, simply include the utility files in your project and import them as needed.

## Usage

```typescript
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
```

## API

### `reverseString(str: string): string`

Reverses a given string.

### `countSubstring(str: string, sub: string): number`

Counts the number of occurrences of a substring in a given string.

### `deepMerge(obj1: object, obj2: object): object`

Deep merges two objects, handling nested objects and arrays.

### `formatDate(date: Date, timezone: string): string`

Formats a date object to a string in the specified timezone.