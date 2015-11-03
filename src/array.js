import {concat} from './util';

var reduce = (arr, convert, connect, initial = []) => {
    return arr.reduce((carry, ...args) => {
        return connect(carry, convert(...args));
    }, initial);
};

export var fill = (n, v) => Array.apply(null, Array(n)).map(() => v);

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

export var maxDim = arrs => {
    return reduce(arrs, arr => arr.length, Math.max, 0);
};

export var zip = (arrs) => {
    return reduce(fill(maxDim(arrs)), (v, i) => ([arrs.map(arr => arr[i])]), concat);
};
