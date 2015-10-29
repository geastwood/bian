var bian = require('../lib/index');

exports.values = function(t) {
  var rst = bian.values({name: 'fei', age: 20});
  t.deepEqual(['fei', 20], rst);
  t.done();
};
