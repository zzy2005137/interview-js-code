// 输出数组重复的元素
let arr = [1, 2, 2, 3, 5, 5, 5, 6];
// [2,5]
// 其实关键点都一样 1. 是否重复  2.结果集是否已经包含


// 1. indexOf 和 lastIndexOf 对比

// 2. 2个set， 一个用于记录重复，另一个用于记录结果

// 3. map ， 检查重复的同时记录出现次数

function duplicateItem(arr) {
  let map = new Map();
  let res = [];
  for (let num of arr) {
    if (!map.has(num)) {
      map.set(num, 1);
      continue;
    }
    if (map.get(num) === 1) {
      res.push(num);
    }
    map.set(num, map.get(num) + 1);
  }
  console.log(res);
}

duplicateItem(arr);
