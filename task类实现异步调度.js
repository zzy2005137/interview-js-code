/**
 * 实现一个 task 类
 * task.log(1).wait(1).log(2).log(3).wait(2).log("finished");
 */


class Task {
  constructor() {
    this.queue = [];
    this.running = false;
  }
  async start() {
    this.running = true;
    while (this.queue.length) {
      let task = this.queue.shift();
      await task();
    }
    this.running = false;
  }

  log(...args) {
    // inqueue
    this.queue.push(() => {
      console.log(...args);
    });
    // start running if it's 空闲
    if (!this.running) {
      this.start();
    }
    //链式调用
    return this;
  }

  wait(time) {
    this.queue.push(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time * 1000);
      });
    });

    if (!this.running) {
      this.start();
    }

    return this;
  }
}

let task = new Task();
task.log(1).wait(1).log(2).log(3).wait(2).log("finished");
