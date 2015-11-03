var arr = require('../lib/array');
exports.maxDim = function (t) {
    t.equal(arr.maxDim([]), 0);
    t.equal(arr.maxDim([[1]]), 1);
    t.equal(arr.maxDim([[1], [1, 2], [1,2,3]]), 3);
    t.done();
};

exports.fill = function (t) {
    t.deepEqual(arr.fill(3), [undefined, undefined, undefined]);
    t.deepEqual(arr.fill(2, 1), [1, 1]);
    t.deepEqual(arr.fill(2, undefined), [undefined, undefined]);
    t.done();
};
exports.zip = function(t) {
    t.deepEqual(
        arr.zip([[1, 2], [true, false], ['first', 'second']]),
        [[1, true, 'first'], [2, false, 'second']]
    );
    t.deepEqual(
        arr.zip([[1], [true, false], ['first', 'second']]),
        [[1, true, 'first'], [undefined, false, 'second']]
    );
    t.deepEqual(
        arr.zip([[], [true, false], ['first', 'second']]),
        [[undefined, true, 'first'], [undefined, false, 'second']]
    );
    t.deepEqual(
        arr.zip([[], [true, false], ['first', 'second', 'third']]),
        [[undefined, true, 'first'], [undefined, false, 'second'], [undefined, undefined, 'third']]
    );
    t.done();
};