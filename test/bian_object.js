var bian = require('../lib/index');

exports.values = function(t) {
  t.deepEqual(['fei', 20], {name: 'fei', age: 20}.bian().values().toValue());
  t.done();
};

exports.valueIf = function(t) {
    t.deepEqual({name: 1, name2: 2,name3: 3, name4: 4, name5: 5, name6: 6}.bian().valuesIf(function (v) {
        return v > 5;
    }).toValue(), [6]);
    t.deepEqual({name: 'fei', age: 30}.bian().valuesIf(function (v) {
        return typeof v === 'string';
    }).toValue(), ['fei']);
    t.done();
};

exports.pair = function(t) {
  t.deepEqual(({name: 'fei', age: 30}).bian().pair().toValue(), [['name', 'fei'], ['age', 30]]);
  t.done();
};

exports.entry = function (t) {
    t.deepEqual({key1: 'value1', key2: 'value2'}.bian().entry().toValue(), [
        {
            key: 'key1', value: 'value1'
        },
        {
            key: 'key2', value: 'value2'
        }
    ]);
    t.deepEqual({key1: 'value1', key2: 'value2'}.bian().entry().toValue().bian().tail().toValue(), [
        {
            key: 'key2', value: 'value2'
        }
    ]);
    t.done();
};
