import Bian from './Bian';
import {pair, values} from './object';

export default class BianObject extends Bian {
  constructor(obj) {
    super(obj);
  }
  pair() {
    var v = this.getValue();
    this._rst = pair(v);
    return this;
  }
  values() {
    var v = this.getValue();
    this._rst = values(v);
    return this;
  }
};
