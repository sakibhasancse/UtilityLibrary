export function deepMerge(obj1: object, obj2: object): object {
    const merged = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (merged.hasOwnProperty(key) && typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
                merged[key] = deepMerge(merged[key], obj2[key]);
            } else if (Array.isArray(obj2[key])) {
                if (!merged.hasOwnProperty(key) || !Array.isArray(merged[key])) {
                    merged[key] = [];
                }
                merged[key] = mergeArrays(merged[key], obj2[key]);
            } else {
                merged[key] = obj2[key];
            }
        }
    }
    return merged;
}

function mergeArrays(arr1: any[], arr2: any[]): any[] {
    const merged = [...arr1];
    arr2.forEach((element, index) => {
        if (typeof element === 'object' && !Array.isArray(element)) {
            merged[index] = deepMerge(merged[index], element);
        } else {
            merged[index] = element;
        }
    });
    return merged;
}


 // Other object utilities...