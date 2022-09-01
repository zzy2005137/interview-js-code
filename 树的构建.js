// 猿辅导第二题，树的层序遍历
// 给一个非空树，求每一层节点value的大差值
/**
 * 输入 
5
1 0 12    // id, pid, value 
2 1 1
3 1 45
4 3 5
5 2 1
 */

/**
 * 首先转换成
 * {
 *   0:[1],
 *   1:[2,3],
 *   2:[5],
 *   3:[4],
 *   4:[],
 *   5:[]
 * }
 */

// 构建树
function buildTree(arr) {
  let tree = {};
  let valueOf = [];
  for (let [id, pid, value] of arr) {
    if (!(pid in tree)) tree[pid] = [];
    tree[pid].push(id);
    valueOf[id] = value;
  }
  return [tree, valueOf];
}

// 层序遍历
function bfs() {
  let [tree, valueOf] = buildTree(inputArr);
  let queue = [0];
  while (queue.length) {
    let n = queue.length;
    let layer = [];
    for (let i = 0; i < n; i++) {
      let id = queue.shift();
      let value = valueOf[id];
      layer.push(value);
      let children = tree[id];
      if (children) queue.push(...children);
    }
    // console.log(Math.max(...layer) - Math.min(...layer));
    console.log(layer);
  }
}

const inputArr = [
  [1, 0, 12],
  [2, 1, 1],
  [3, 1, 45],
  [4, 3, 5],
  [5, 2, 1],
];

bfs();
