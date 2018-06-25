/**
 * Created by Gemini on 2018/4/13.
 */

// 一、
// https://www.cnblogs.com/baiyangyuanzi/p/6519612.html
// 使用JSON.parse(),JSON.stringify()实现对对象的深拷贝
/*
var test={
    a:"ss",
    b:"dd",
    c:[
        {dd:"css",ee:"cdd"},
        {mm:"ff",nn:"ee"}
    ]
};
console.log("test");
console.log(test);
// JSON.parse(jsonstr); ------可以将json字符串转换成json对象
// eval('(' + jsonstr + ')'); ------同上
// JSON.stringify(jsonobj); ------可以将json对象转换成json对符串
console.log("!!!  " + JSON.stringify(test));
var test1 = JSON.parse(JSON.stringify(test)); // 拷贝数组,注意这行的拷贝方法
console.log("test1");
console.log(test1);
// test1.c[0].dd="change"; // 改变test1的c属性对象的d属性
// console.log("test");
// console.log(test);  // 不影响test
// console.log("test1");
// console.log(test1);
// var test2 = test;
// test2.c[0].dd="change";
// console.log("test");
// console.log(test);  // 影响test
// console.log("test2");
// console.log(test2);
*/

// 二、
// 数组 -> 数组方法
// 《JavaScript权威指南第6版》
// 1、Array.join() 转化数组元素为字符串并连接在一起，返回字符串
/*
var a = [1, 2, 3];
console.log(a.join()); // 默认是","
console.log(a.join(" "));
console.log(a.join(""));
var b = new Array(10);
console.log(b.join("-"));
*/

// 2、Array.reverse() ，返回逆序数组
/*
var a = [1,2,3];
console.log(a.reverse().join());
*/

// 3、Array.sort()，返回排序数组，修改了调用的数组
/*
var a = [6,1,4,3,2,7,8,5];
console.log(a.sort().join());
*/

// 4、Array.concat()，创建并返回一个合并的新数组，concat()不会修改调用的数组
/*
var a = [1,2,3];
console.log(a.concat(4, [5,[6,7]]));
console.log(a);
// Array.prototype.push.apply，创建并返回一个合并后的数组
var b = [1,2,3];
Array.prototype.push.apply(b, (4, [5,[6,7]]))
console.log(b);
*/

// 5、Array.slice()，截取并返回数组，slice()不会修改调用的数组

/*
var a = [1,2,3,4,5];
console.log(a.slice(0,3));
console.log(a.slice(3));
console.log(a.slice(1,-1)); // -1指定了最后一个元素
console.log(a.slice(-3,-2)); // -3指定了倒数第三个元素
console.log(a);
*/


// 6、Array.splice()，插入或删除元素返回数组，splice()不会修改调用的数组，区别于concat()，splice()会插入数组本身而非数组元素。
/*
var a = [1,2,3,4,5,6,7,8];
console.log("a");
console.log(a);
console.log("a.splice(4)"); // 起始位置4
console.log(a.splice(4));
console.log("a");
console.log(a);
console.log("a.splice(1,2)"); // 起始位置1，删除2个
console.log(a.splice(1,2));
console.log("a");
console.log(a);
console.log("a.splice(1,1)");
console.log(a.splice(1,1));
console.log("a");
console.log(a);
var b = [1,2,3,4,5];
console.log("b");
console.log(b);
console.log("b.splice(2,0,'a','b')"); // 起始位置2，删除0个，插入'a','b'
console.log(b.splice(2,0,'a','b'));
console.log("b");
console.log(b);
console.log("b.splice(2,2,[1,2],3)");
console.log(b.splice(2,2,[1,2],3));
console.log("b");
console.log(b);
*/

// 千帆印力项目里用到的
/*
var newList = JSON.parse(JSON.stringify(['a', 'b', 'c'])) || [];
var baseList = JSON.parse(JSON.stringify(['base'])) || [];

baseList.splice(0, 0, ...newList);
console.log(1111, baseList);
*/

// 7、Array.push()，在数组的尾部添加一个或多个元素，返回数组新长度；
// Array.pop()，删除数组最后一个元素，返回数组新长度；
/*
var stack = [];
console.log("stack: ");
console.log(stack);
console.log("stack.push(1,2) length: " + stack.push(1,2));
console.log("stack: ");
console.log(stack);
console.log("stack.pop(): " + stack.pop());
console.log("stack: ");
console.log(stack);
console.log("stack length: " + stack);

console.log("stack.push([4,5]) length: " + stack.push([4,5]));
console.log("stack: ");
console.log(stack);
console.log("stack.pop(): " + stack.pop());
console.log("stack: ");
console.log(stack);
console.log("stack.pop(): " + stack.pop());
console.log("stack: ");
console.log(stack);
*/

// 8、Array.unshift()，在数组的头部添加一个或多个元素，返回数组新长度；
// Array.shift()，删除数组第一个元素，返回数组第一个元素；
/*
var stack = [];
console.log("stack: ");
console.log(stack);
console.log("stack length: " + stack.unshift(8));
console.log("stack: ");
console.log(stack);
console.log("stack length: " + stack.unshift(22));
console.log("stack: ");
console.log(stack);
console.log("stack删除第一个元素: " + stack.shift());
console.log("stack: ");
console.log(stack);
console.log("stack length: " + stack.unshift(3,[4,5]));
console.log("stack: ");
console.log(stack);
console.log("stack删除第一个元素: " + stack.shift());
console.log("stack: ");
console.log(stack);
console.log("stack删除第一个元素: " + stack.shift());
console.log("stack: ");
console.log(stack);
console.log("stack删除第一个元素: " + stack.shift());
console.log("stack: ");
console.log(stack);
*/

// 9、Array.toString()，把数组每个元素转化为字符串
// Array.toLocalString()，自定义字符串实现转化
/*
console.log([1,2,3].toString());
console.log(["a","b","c"].toString());
console.log([1,[2,'c']].toString());
*/

// 三、
// ECMAScript 5中的 -> 数组方法
// 《JavaScript权威指南第6版》
// 1、Array.forEach() 三个参数（数组元素、元素索引、数组本身），从头到尾遍历数组
/*
var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function (value) { sum += value; });
console.log("sum = " + sum);
data.forEach(function (value, index, a) { a[index] = value + 1; });
console.log("data元素自加1: " + data);
*/

// 2、Array.map() 调用数组的每个元素传递给指定的函数，并返回一个数组
/*
var a = [1, 2, 3];
console.log("a: " + a);
b = a.map(function(x) { return x*x; });
console.log("b: " + b);
var c = [
    {code: 1, name: "张三"},
    {code: 2, name: "李四"},
    {code: 3, name: "王麻子"},
]
console.log("c: ");
console.log(c);
d = c.map(value => value.code);
console.log("d: " + d);
e = c.map(value => value.name);
console.log("e: " + e);

c.map(value => {
    if(value.code == 1){
    value.age = 10           // 还能添加属性
    }
})
console.log("c:")
console.log(c)
*/

// 3、Array.filter() 返回的数组元素是调用数组的一个子集。传递的函数是用来逻辑判断的，true元素添加到返回数组中
/*
var a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3; });
console.log("smallvalues: " + smallvalues);
everyother = a.filter(function (x, i) { return i%2 == 0 });  // x: 元素； i: index。
console.log("everyother: " + everyother);
*/

// 4、Array.every() 和 Array.some() 是数组的逻辑判定。对元素判定，返回true或false。
/*
var a = [5, 4, 3, 2, 1];
console.log("a.every(): " + a.every(function (x) { return x < 10; }));
console.log("a.every(): " + a.every(function (x) { return x % 2 === 0; }));
console.log("a.some(): " + a.some(isNaN));
console.log("a.some(): " + a.some(function (x) { return x % 2 === 0; }));
*/

// 5、Array.reduce() 和 Array.reduceRight()，对数组元素进行函数操作组合，返回单个值 。参数一是操作函数，参数二可选是传递给函数的初始值。
/*
var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function (x, y) { return x + y }, 0);
console.log("sum: " + sum);
var product = a.reduce(function (x, y) { return x * y }, 1);
console.log("product: " + product);
var max = a.reduce(function (x, y) { return (x>y)?x:y });
console.log("max: " + max);
*/

// 6、Array.indexOf() 和 Array.lastIndexOf()，对数组元素进行搜索，找到第一个元素的索引，没找到的返回-1。
/*
var a = [0, 1, 2, 1, 0];
console.log("a.indexOf(1): " + a.indexOf(1));
console.log("a.lastIndexOf(1): " + a.lastIndexOf(1));
console.log("a.indexOf(3): " + a.indexOf(3));
*/

// 四、
// js得到多维数组中相同键的值
// https://blog.csdn.net/xlb744868186/article/details/49798667
/*
var arr=[
    {'key1':'value1','key2':'value2','key3':'value3'},
    {'key1':'value4','key2':'value5','key3':'value6'},
    {'key1':'value7','key2':'value8','key3':'value9'}];
var obj={};
var narr=new Array();
for(var i=0; i<arr.length; i++){
    for(var j in arr[i]){
        if(obj[j]!=undefined)
            obj[j]+=arr[i][j];
        else
            obj[j]=arr[i][j];
    }
}
for(var i in obj){
    narr.push(eval("({'"+i+"':'"+obj[i]+"'})"));
}
console.log(narr);
console.log(narr[1].key2);
*/

// 数组去重
/*
var arr = [2, 3, 1, 4, 2, 2, 3, 4, 1, 4, 2, "1", NaN, NaN]; // [2,3,1,4]
//Set方法可以去除数组内重复的
// ... 表明展开数组的每一项
var res=[...(new Set(arr))];
console.log(res);
*/

// 五、
// js数组详细操作方法及解析合集
// https://segmentfault.com/a/1190000015111104?utm_source=channel-hottest
/*
let a = ['1', '2', '3', '4'];
let result = a.map(value => value + ' | 新数组的新元素');
console.log(result, a)
*/

// 六、.join().split()
/*
let a = ['I','love', 'you', '!']
let b = a.join(' ')
console.log(b)

let c = 'I;love;you;!'
let d = c.split(';')
console.log(d)
console.log(d[1])
*/

// 七、.concat()
// 可以用作动态生成form
let categoryList1 = [{
    cate1Id: '',
    cate1Name: '',
    cate2Id: '',
    cate2Name: '',
    selectedIndex:0
}]

let categoryList2 = categoryList1.concat({
    cate1Id: '',
    cate1Name: '',
    cate2Id: '',
    cate2Name: '',
    selectedIndex: 0
})

console.log(categoryList2)
