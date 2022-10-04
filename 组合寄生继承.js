// 即实现 Child.prototype 原型为 Parent.prototype
// Child.prototype 的 constructor 属性指向 Child 函数本身

function Parent(job) {
  this.job = job;
}

function Child(name, job) {
  Parent.call(this, job);
  this.name = name;
}

function inheritPrototype(Child, Parent) {
  let p = Object.create(Parent.prototype);
  p.constructor = Child;
  Child.prototype = p;
}
