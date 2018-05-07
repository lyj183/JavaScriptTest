// 使用JavaScript工具库Lodash
// http://www.css88.com/doc/lodash/

/* 引入lodash库 */
var _ = require('lodash')


// 一、
// https://www.cnblogs.com/whitewolf/p/4417873.html
var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 18 }
];

// 1、获取所有用户名字，并以”,“分割
// ES6
var names = _
    .chain(users)
    .map((o) => o.user)
    .join(" , ")
    .value();
// 或
var names = _(users).map('user').join(' , ');
console.log(names);
console.log(typeof names)
// ES5
// var names = _
//     .chain(users)
//     .map(function(o){
//         return o.user;
//     })
//     .join(" , ")
//     .value();
// console.log(names);

// 2、获取最年轻的用户
var youngest = _.minBy(users, (o) => o.age);
console.log(youngest);


// 二、
// http://www.css88.com/doc/lodash/#_indexofarray-value-fromindex0
// 1、_.intersection([arrays])，返回一个包含所有传入数组交集元素的新数组。
console.log(_.intersection([2, 3, 1], [4, 3, 2], [1, 3, 2]));

// 2、_.intersectionWith([arrays], [comparator])，返回一个包含所有传入数组交集元素的新数组。
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log(_.intersectionWith(objects, others, _.isEqual));

// 3、_.join(array, [separator=','])，将 array 中的所有元素转换为由 separator 分隔的字符串。
console.log(_.join(['a', 'b', 'c'], '~'));

// 3、_.reverse(array)，反转array。
var array = [1, 2, 3];
console.log(_.reverse(array));

// 4、_.union([arrays])，创建一个按顺序排列的唯一值的数组。
console.log(_.union([2, 3, 2, 1, 4, 4, 5]))

console.log(_.now());