// MDN
// https://developer.mozilla.org/zh-CN/
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

/*
const target = { a: {name: "kankan", age: 34}, b: {name: "qianqian", age: 44} };
const source = { b: {name: "pianpian", age: 54}, c: {name: "qiaoqiao", age: 64} };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);%

console.log(source);
*/

// 练习一，创建对象新属性
let newObject = {}
let object1 = "object1"
newObject.object1 = "对象1"
newObject['object2'] = '对象2'
console.log(newObject)

// 练习一，创建对象新属性
delete newObject.object1;//删除属性
console.log(newObject)