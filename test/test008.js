// JavaScript深入之从原型到原型链
// 参考：https://github.com/mqyqingfeng/Blog/issues/2

// 1、构造函数创建一个对象
/*
function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin
*/

// 2、prototype
/*
function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
*/

// 3、__proto__
/*
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
*/

// 4、constructor
/*
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
*/

// 综上
/*
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
*/

// JavaScript高级程序设计第3版
// P.28 浮点数值 （pdf P.47）
let a = 0.1
let b = 0.2
if (a+b == 0.3) {
    console.log("可以这样写")
} else {
    console.log(a+b)
}