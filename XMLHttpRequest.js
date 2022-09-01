// XHR用法 参考 https://zh.javascript.info/xmlhttprequest#xmlhttprequest-ji-chu
// 使用 promise 封装一个 xhr 请求
// 参考 https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr

/**
 * xhr 用法 ：
 * 1.  new 一个实例
 * 2. 使用open方法进行配置
 * 3. send 发送请求
 * 4. onload, onerror, onprogress 属性注册回调函数
 */

function makeRequest(method, url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    //   xhr.setRequestHeader("Content-Type", "application/json");
    //处理响应
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          response: xhr.response,
        });
      }
    };

    xhr.onerror = () => {
      reject({
        status: xhr.status,
        response: xhr.response,
      });
    };
  });
}

makeRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
  (response) => {
    console.log(response);
  }
);

//升级版本 支持 post 方法
/**
 * 
 * @param {*} option 
 * @returns 
 * 
 * 
 *  {
        method: String,
        url: String,
        params: Object,
        headers: Object
    }
 * 
 */

function makeRequestPlus(option) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(option.method, option.url);
    // set header
    //   xhr.setRequestHeader("Content-Type", "application/json");
    if (option.headers) {
      for (let [header, value] of Object.entries(option)) {
        xhr.setRequestHeader(header, value);
      }
    }
    // set params
    let params;
    if (option.params) {
      params = JSON.stringify(params);
    }
    xhr.send(params);

    //处理响应
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          response: xhr.response,
        });
      }
    };

    xhr.onerror = () => {
      reject({
        status: xhr.status,
        response: xhr.response,
      });
    };
  });
}

makeRequestPlus({
  method: "POST",
  url: "https://jsonplaceholder.typicode.com/posts",
  params: {
    title: "foo",
    body: "bar",
    userId: 1,
  },
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then((res) => {
  console.log(res);
});
