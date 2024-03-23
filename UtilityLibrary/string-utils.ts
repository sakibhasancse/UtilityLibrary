export function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

export function countSubstring(str: string, sub: string): number {
    let count = 0;
    let index = str.indexOf(sub);
    while (index !== -1) {
        count++;

        index = str.indexOf(sub, index + 1);
    }
    return count;
}

  // Other string utilities...
