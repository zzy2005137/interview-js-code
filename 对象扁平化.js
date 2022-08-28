/* 题目*/
var entryObj = {
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


function flat(obj, prefix) {
    let res = {} 
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            
        } else {    
            res[prefix] = obj[key]
        }
    }
    return res  
}