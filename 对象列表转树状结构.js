/*
对象列表转树状结构 => 递归 
*/
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];

//找到以pid为父节点的对象，返回children数组
function toTree(arr, pid) {
  let res = [];
  for (let obj of arr) {
    if (obj.pid === pid) {
      let children = toTree(arr, obj.id);
      if (children.length) obj.children = children;
      res.push(obj);
    }
  }
  return res;
}

let treeArray = toTree(arr, 0);
console.log(JSON.stringify(treeArray, null, 2));

`
[
  {
    "id": 1,
    "name": "部门1",    
    "pid": 0,
    "children": [       
      {
        "id": 2,        
        "name": "部门2",
        "pid": 1        
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          {
            "id": 4,
            "name": "部门4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "name": "部门5",
                "pid": 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "部门6",
    "pid": 0
  }
]
`;
