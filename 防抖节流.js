// 节流  n秒内触发多次只执行1次， 期间重复触发忽略掉 =》 Date.now
// 防抖  触发事件后n秒再执行，期间重复触发重新计时   =》 定时器

function throttle(fn, delay) {
  let pre = Date.now();
  return function () {
    if (Date.now() - pre > delay) {
      fn.apply(this, arguments);
      pre = Date.now();
    }
  };
}

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    let args = arguments;
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
