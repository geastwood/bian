var bian = require('../lib/index');

exports.head = function(t) {
  t.deepEqual([1,2,3,4].bian().head().toValue(), 1);
  t.deepEqual([].bian().head().toValue(), (void 0));
  t.done();
};

exports.tail = function(t) {
  t.deepEqual([].bian().tail().toValue(), []);
  t.deepEqual([1].bian().tail().toValue(), []);
  t.deepEqual([1,2,3,4].bian().tail().toValue(), [2,3,4]);
  t.deepEqual([1,2,3,4].bian().tail().head().toValue(), 2);
  t.done();
};
