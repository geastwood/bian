import {curry} from 'lodash';

class Functor {
  //constructor(v) {
  //  this._wrap = v;
  //}
  map() {
    throw new Error('should not call from here');
  }
  //getValue() {
  //  return this._wrap;
  //}
}

export class Identity extends Functor {
  constructor(v) {
    super(v);
    this.v = v;
  }
  map(f) {
    return new Identity(f(this.v));
  }
}

export var map = curry((f, u) => u.map(f));
