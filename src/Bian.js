import { compose, identity } from './util';

export default class Bian {
  constructor(obj) {
    this._wrap = obj;
    this._rst = null;
  }
  getValue() {
    if (this._rst) {
      return this._rst;
    }
    return this._wrap;
  }
  toValue() {
    return this._rst;
  }
  static compose(...args) {
    return compose.apply(null, args)
  }
  static identity(v) {
    return identity(v);
  }
};
