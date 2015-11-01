export default class Bian {
  constructor(obj) {
    this._wrap = obj;
  }
  getOrig() {
    return this._wrap;
  }
};
