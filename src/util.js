const concat = (a1, ...arrs) => (Array.isArray(a1) ? a1 : [a1]).concat(...arrs);

const identity = v => v;

const compose = (...fns) => v => concat(identity, fns).reduceRight((rst, fn) => fn(rst), v);

export default { compose, identity, concat };
