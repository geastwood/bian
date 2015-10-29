var compose = (...fns) => v => fns.reduceRight((rst, fn) => fn(rst), v);

var identity = v => v;

var concat = (a1, ...arrs) => a1.concat(...arrs);

var o2a = function(obj, convert, connect, decorators = [(obj) => obj.rst]) {
  return Object.keys(obj).reduce((carry, key, i, arr) => {
    return connect(carry, compose(...decorators)({
      v: obj[key], key, i, arr, carry,
      rst: convert(obj[key], key, i, arr)
    }));
  }, []);
};

var values = function(obj) {
  return o2a(obj, identity, concat);
};

var valuesIf = function(obj, pred) {
  return o2a(obj, (v, ...args) => {
    return pred(v, ...args) ? v : [];
  }, concat, [obj => {
    return obj.rst;
  }]);
};

var groupBy2 = function(obj, names) {
  var [first, second] = names;
  return o2a(obj, identity, concat, [
    o => {
      if (o.i % 2 === 0) {
        return {[first]: o.rst};
      } else {
        o.carry[o.carry.length - 1][second] = o.rst;
        return [];
      }
    }
  ]);
};

var entry = (obj, names = ['key', 'value']) => {
  var [keyProp, valueProp] = names;
  return o2a(obj, (v, k) => ({[keyProp]: k, [valueProp]: v}), concat);
};

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
export default { compose, values, valuesIf, entry, identity };
