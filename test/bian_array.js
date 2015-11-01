var bian = require('../lib/index');
exports.head = function(t) {
  t.deepEqual([1,2,3,4].bian().head(), 1);
  t.deepEqual([].bian().head(), (void 0));
  t.done();
};
exports.tail = function(t) {
  t.deepEqual([].bian().tail(), []);
  t.deepEqual([1].bian().tail(), []);
  t.deepEqual([1,2,3,4].bian().tail(), [2,3,4]);
  t.done();
};
