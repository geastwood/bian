import Bian from './bian';
import {get, trucy} from './util';
import {head, last, initial, tail} from './array';

export default class BianArray extends Bian {
  constructor(obj) {
    super(obj);
  }
  head() {
    return this.call(head);
  }
  last() {
    return this.call(last);
  }
  initial() {
    return this.call(initial);
  }
  tail() {
    return this.call(tail);
  }
  pick(name) {
    return this.call(v => {
      return v.map(get(name));
    });
  }
  unique() {
   return this.call(v => {
     var hasNaN = false;
     return v.reduce((carry, item) => {
       return carry.indexOf(item) === -1 ? carry.concat(item) : carry;
     }, []);
   });
  }
  compact() {
    return this.call(v => {
      return v.filter(trucy);
    });
  }
  chunk(size) {
    size = Math.max(size, 1);
    var rst = [];
    return this.call(v => {
      var length = v.length;
      for (var i = 0; i < length; i = i + size) {
        rst = rst.concat([v.slice(i, i + size)]);
      }
      return rst;
    });
  }
};
