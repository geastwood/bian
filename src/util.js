export var concat = (a1, ...arrs) => (Array.isArray(a1) ? a1 : [a1]).concat(...arrs);
export var identity = v => v;
export var compose = (...fns) => v => concat(identity, fns).reduceRight((rst, fn) => fn(rst), v);
