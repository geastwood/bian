import Bian from './Bian';
import {pair, values, valuesIf, entry} from './object';

export default class BianObject extends Bian {
  constructor(obj) {
    super(obj);
  }
  pair() {
    return this.call(v => pair(v));
  }
  values() {
    return this.call(v => values(v));
  }
  valuesIf(fn) {
    return this.call(v => valuesIf(v, fn));
  }
  entry() {
    return this.call(v => entry(v));
  }
};
