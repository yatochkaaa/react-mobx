import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  timer = 60;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
  }

  deccrement() {
    this.count = this.count - 1;
  }

  get total() {
    return 'Count + timer = ' + (this.timer + this.count);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Counter();
