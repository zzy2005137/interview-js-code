class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  // 实现订阅
  on(type, callBack) {
    if (!this.events.has(type)) this.events.set(type, new Set());
    this.events.get(type).add(callBack);
  }
  // 触发事件
  emit(type, ...rest) {
    if (this.events.has(type)) {
      this.events.get(type).forEach((callBack) => callBack.apply(this, rest));
    }
  }
  // 删除订阅
  off(type, callBack) {
    if (this.events.has(type)) {
      this.events.get(type).delete(callBack);
    }
  }
  // 只执行一次订阅事件
  once(type, callBack) {
    this.on(type, () => {
      callBack();
      this.off(type, callBack);
    });
  }
}
// 使用如下
const event = new EventEmitter();

const handle1 = (...params) => {
  console.log("click event111, params: " + params);
};

const handle2 = (...params) => {
  console.log("click event222, params: " + params);
};

event.on("click", handle1);

event.on("click", handle2);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle1);
event.off("click", handle2);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");
