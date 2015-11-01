//var obj1 = {
//  somekey1: 'name1',
//  somekey2: 'value1',
//  somekey3: 'name2',
//  somekey4: 'value2',
//  somekey6: 'name4',
//};
//
//console.log(values(obj1));
//console.log(valuesIf(obj1, v => v.indexOf('name') >= 0 ));
//console.log(compose(v => v + 1, v => v * 2, identity)(3));
//console.log(groupBy2(obj1, ['name', 'value']))
//console.log(entry(obj1));
//console.log(entry(obj1, ['fei', 'liu']));

var bian = require('../lib/index');

exports.values = function(t) {
  t.deepEqual(['fei', 20], {name: 'fei', age: 20}.bian().values().toValue());
  t.done();
};

exports.pair = function(t) {
  t.deepEqual(({name: 'fei', age: 30}).bian().pair().toValue(), [['name', 'fei'], ['age', 30]]);
  t.done();
};
