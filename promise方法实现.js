/**
 * 实现promise.all
 * 基本思路，利用闭包创建一个新的 promise 和 count
 * 给每个 promise 都加上 then 和 catch
 */

function all(promiseArr) {
  let fulfilledResults = []; //结果数组
  let count = 0;
  return new Promise((resolve, reject) => {
    //用forEach 接收promise和index
    //给每个promise加一个then回调，把结果存进结果数组里，并且结果数组满了之后 resolve 新promise
    //同时给每个promise加一个catch 处理错误，立即reject 新promise
    promiseArr.forEach((p, i) => {
      p.then((result) => {
        fulfilledResults[i] = result;
        count++;
        if (count === promiseArr.length) resolve(fulfilledResults);
      }).catch((error) => reject(error));
    });
  });
}

let promise1 = new Promise(function (resolve) {
  resolve(1);
});
let promise2 = new Promise(function (resolve) {
  resolve(2);
});
let promise3 = new Promise(function (resolve) {
  resolve(3);
});

let p = all([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);

/**
 * 实现promise.race
 * 给每个 promise 都加上 then 和 catch
 */
function race(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((p) => p.then(resolve).catch(reject));
  });
}
