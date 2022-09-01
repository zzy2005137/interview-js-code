//  sort 函数的用法

/*
原地算法，即会修改原数组
1.arr.sort()  默认排序顺序是在将元素转换为字符串，然后按字典序排序  即 80 < 9, ab < abc
2.arr.sort(compareFunciton(a,b)) 根据传入的比较函数进行排序
    返回值 < 0  => a 排在 b 前 
    返回值 > 0  => b 排在 a 前 
          = 0   => 顺序不变
*/

// eg1 按照权重排序

var items = [
  { name: "Edward", value: 21, id: 1 },
  { name: "Sharpe", value: 37, id: 2 },
  { name: "And", value: 45, id: 3 },
  { name: "The", value: -12, id: 4 },
  { name: "Magnetic", value: 20, id: 5 },
  { name: "Zeros", value: 37, id: 6 },
];

function compareFunction(a, b) {
  // 按 value 排序
  if (a.value !== b.value) {
    return a.value - b.value;
  } else {
    // value 相同按 id 排序
    return a.id - b.id;
  }
}

items.sort(compareFunction);
console.log(items);
