import Bian from './Bian';
import {pair, values} from './object';

export default class BianObject extends Bian {
  constructor(obj) {
    super(obj);
  }
  pair() {
    return pair(this._wrap);
  }
  values() {
    return values(this._wrap);
  }
};
