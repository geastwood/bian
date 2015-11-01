import Bian from './bian';

export default class BianArray extends Bian {
  constructor(obj) {
    super(obj);
  }
  head() {
    return this._wrap[0];
  }
  tail() {
    if (this._wrap.length <= 1) {
      return [];
    }
    return this._wrap.slice(1);
  }
};
