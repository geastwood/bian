import Bian from './bian';

export default class BianArray extends Bian {
  constructor(obj) {
    super(obj);
  }
  head() {
    this._rst = this.getValue()[0];
    return this;
  }
  tail() {
    var v = this.getValue();
    if (v.length <= 1) {
      this._rst = [];
    } else {
      this._rst = v.slice(1);
    }
    return this;
  }
};
