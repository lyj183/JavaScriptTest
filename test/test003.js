// 使用JavaScript工具库Lodash
// http://www.css88.com/doc/lodash/

/* 引入lodash库 */
var _ = require('lodash')


// 一、
// https://www.cnblogs.com/whitewolf/p/4417873.html
/*
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
// 等同于
var otherWayNames = users.map(item=>item.user).join(' , ')
console.log(otherWayNames);
console.log(typeof otherWayNames)
*/
/** 项目中用到的
 * // 以下三行
 * var _ = require('lodash')
 * let contentArray = eval('(' + v.batchCoupon + ')');
 * v.batchContents = _(contentArray).map('description').join( ' <br> ' );
 * // 等同于
 * let contentArray = JSON.parse(v.batchCoupon)
 * v.batchContents = contentArray.map(item=>item.description).join( '<br>' );
 **/

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
/*
var youngest = _.minBy(users, (o) => o.age);
console.log(youngest);
*/

// 二、
// http://www.css88.com/doc/lodash/#_indexofarray-value-fromindex0
// 1、_.intersection([arrays])，返回一个包含所有传入数组交集元素的新数组。
/*
console.log(_.intersection([2, 3, 1], [4, 3, 2], [1, 3, 2]));

// 2、_.intersectionWith([arrays], [comparator])，返回一个包含所有传入数组交集元素的新数组。
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log(_.intersectionWith(objects, others, _.isEqual));

// 3、_.join(array, [separator=','])，将 array 中的所有元素转换为由 separator 分隔的字符串。
console.log(_.join(['a', 'b', 'c'], '~'));

// 4、_.reverse(array)，反转array。
var array = [1, 2, 3];
console.log(_.reverse(array));

// 5、_.union([arrays])，创建一个按顺序排列的唯一值的数组。
console.log(_.union([2, 3, 2, 1, 4, 4, 5]))

// 6、时间戳
console.log(_.now());
*/

// 7、_.each
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

var user = []
_.each(users, item => {
    item.user === 'fred' && user.push(item)
})
console.log(user)

// 三、
// 项目中用到的
// filterNode(value, data) {
//     console.log("value");
//     console.log(value);
//     console.log("data");
//     console.dir(data);
//     if (!value) return true;
//     return _.findIndex(value, item => item==data.id)!==-1  // 大牛指点！回头要了解下。
//
//     //return data.id == value[0] || data.id == value[1] || data.id == value[2];
// }
//
/*
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];
console.log(_.findIndex(users, item => { return item.user == 'barney'; }));
console.log(_.findIndex(users, item => { return item.user == 'no'; }));
*/


// ...运算符
/*
var array1 = [1, 2, 3, {name: "Lin", age: 18}];
var array2 = [...array1];
console.log("array1", array1);
console.log("array2", array2);
array1[3].name = "Li";
console.log("array1", array1);
console.log("array2", array2);
var array3 = [..."hello"];
console.log("array3", array3);
*/