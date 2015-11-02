import Bian from './Bian';
import {pair, values} from './object';

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
};
