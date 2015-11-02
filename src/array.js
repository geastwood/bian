export var last = arr => arr[Math.max(arr.length - 1, 0)];
export var head  = arr => arr[0];
export var initial = arr => {
    if (arr.length <= 1) {
        return [];
    }
    return arr.slice(0, arr.length - 1);
};
export var tail = arr => {
    return arr.length <= 1 ? [] : arr.slice(1);
};
