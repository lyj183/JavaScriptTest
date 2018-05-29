/**
 * Created by Gemini on 2018/4/14.
 */

// 一、
// 《深入理解ES6》 -> 箭头函数

/*
// 1、没有参数
var getName = () => "linyijin";
console.log(getName());

// 2、一个参数
var test = value => value/10 ;
console.log(test(100));

// 3、两个参数
var sum = (num1, num2) => num1 + num2;
console.log(sum(1,2));

// 4、创立立即调用函数表达式
let person = ((name) => {
    return {
        getName: function () {
            return name;
        }
    };
})("Nicholas");
console.log(person.getName());
*/

// 二、
// 《深入理解ES6》 -> 扩展运算符(...)

// 1、Max(不允许)传入数组
// 普通的2个数比较
/*
let value1 = 25,
    value2 = 50;
console.log(Math.max(value1, value2));
// 数组比较
let values = [25, 50, 75, 100];
// ES5的做法
console.log(Math.max.apply(Math, values));
// ES6的做法
console.log(Math.max(...values));
// 返回最小0，而非负数
let otherValues = [-25, -50, -75, -100];
console.log(Math.max(...otherValues, 0));
*/

// 三、
// ES6精华：解构赋值
// https://segmentfault.com/a/1190000015072149?utm_source=channel-hottest
let [a] = [3];
let [ , b] = [3, [7]];
let {c} = {c: 3};
let {m: {d}} = {m: {d: 3}};
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// https://segmentfault.com/a/1190000015066972?utm_source=channel-hottest
let {e, f, g} = {e: 10, f: 9, g:[8, 7]}
console.log(e);
console.log(f);
console.log(g);


