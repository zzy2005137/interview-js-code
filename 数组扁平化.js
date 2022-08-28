let arr = [1, 2, [3, 4, [5]]];

//递归
function flat(arr) {
  let res = [];
  for (let item of arr) {
    if (!Array.isArray(item)) {
      res.push(item);
    } else {
      res.push(...flat(item));
    }
  }
  return res;
}

console.log(flat(arr));
