// 递归比较obj的原型是否 === 构造函数.prototype

function myInstanceof(obj, constructor) {
  if (obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  if (proto === constructor.prototype) return true;
  return myInstanceof(proto, constructor);
}

console.log(myInstanceof([], Object));
