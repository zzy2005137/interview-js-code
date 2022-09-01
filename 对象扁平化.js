/* 题目*/
var inputObj = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};

// 要求转换成如下对象
var outputObj = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};

// solution
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function flat(obj) {
  let res = {};
  // 递归函数
  function dfs(cur, prefix) {
    if (isObject(cur)) {
      for (let key in cur) {
        dfs(cur[key], `${prefix}${prefix === "" ? "" : "."}${key}`); // ！！
      }
    } else {
      res[prefix] = cur;
    }
  }
  dfs(obj, "");
  return res;
}

// console.log(flat(inputObj));

/*题目 综合*/
const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

flatten(obj); // 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

function flatten(obj) {
  let res = {};

  function dfs(cur, prefix) {
    //不是Object
    if (!isObject(cur)) {
      res[prefix] = cur;
    }
    //是Objcet但不是数组
    if (isObject(cur) && !Array.isArray(cur)) {
      for (let key in cur) {
        dfs(cur[key], `${prefix}${prefix === "" ? "" : "."}${key}`);
      }
    }
    //是数组
    if (Array.isArray(cur)) {
      for (let i = 0; i < cur.length; i++) {
        dfs(cur[i], `${prefix}[${i}]`);
      }
    }
  }
  dfs(obj, "");
  return res;
}

console.log(flatten(obj));
