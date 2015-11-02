import Bian from './bian';

export default class BianArray extends Bian {
  constructor(obj) {
    super(obj);
  }
  head() {
    return this.call(v => v[0]);
  }
  tail() {
    return this.call(v => {
      return v.length <= 1 ? [] : v.slice(1);
    });
  }
};
