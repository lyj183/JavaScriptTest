// 《深入理解ES6翻译完整版》
// P.16
// var 提升
/*
for (var i = 0; i<10; i++) {

}
// 不报错，如果var换成let会报错
console.log(i)
*/

// P.17
// 立即调用表达式
/*
var funcs = [];
for (var i = 0; i < 10; i++) {
    // 打印出十次10
    // 如果var换成let打印出0到9
    // funcs.push(() => {
    //     console.log(i);
    // })

    // 打印出0到9
    funcs.push(function (value) {
        return function () {
            console.log(value);
        }
    }(i))
}
funcs.forEach(func => {
    func()
})
*/

// P.54
// 用于赋值时，逗号操作符总会返回表达式的最后一项
/*
var num = (5, 1, 4, 8, 0); // num的值为0
console.log(num)
*/

// P.64
// 函数参数
/*
function  sayHi() {
    console.log("Hello " + arguments[0] + arguments[1]);
}
sayHi("Lin", "Yijin")
*/

// P.92
// 栈方法，push()和pop()，后进先出
/*
var array1 = [];
array1.push("red");
array1.push("green")
console.log("array1: ", array1);
var item1 = array1.pop();
console.log("array1: ", array1);
console.log("item1: ", item1);
// 队列方法，
var array2 = [];
array2.push("red");
array2.push("green");
console.log("array2: ", array2);
var item2 = array2.shift();
console.log("array2: ", array2);
console.log("item2: ", item2);
var array3 = [];
array3.unshift("red");
array3.unshift("green");
console.log("array3: ", array3);
var item3 = array3.pop();
console.log("array3: ", array3);
console.log("item3: ", item3);
*/

// P.93
// 比较函数，sort()，是做string比较
/*
var values = [0, 1, 5, 10, 15];
values.reverse();
console.log(values);
values.sort();
console.log(values);
values.sort(compare);
console.log(values);
function compare(value1, value2) {
    if(value1 < value2) {
        return -1;
    } else if(value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
*/

// P.97
// filter()
/*
var numbers = [1,2,3,4,5,4,3,2,1];
var fileResult = numbers.filter((item, index) => {
    return (item > 2);
})
console.log(fileResult)
*/

// P.99
// Date类型
// 里面的坑
/*
var someDate1 = new Date(Date.parse("2018/12/24")); // 等同于 var someDate1 = new Date("2017/02/16");
console.log(someDate1); // 差8小时
var someDate2 = new Date(Date.parse("2017/12/24")); // 等同于 var someDate1 = new Date("2017/02/16");
someDate2 = new Date(someDate2.getTime()-1000*60*someDate2.getTimezoneOffset())
console.log(someDate2); // 更正了8小时时间差
var someDate3 = new Date(Date.now());
console.log(someDate3); // 差8小时
var someDate4 = new Date(Date.now());
someDate4 = new Date(someDate4.getTime()-1000*60*someDate4.getTimezoneOffset())
console.log(someDate4); // 更正了8小时时间差
*/

// P.105
/*
var pattern = /[bc]at/; //匹配bat或cat
console.log(pattern.test("abcabat"));
var pattern2 = /^[A-Za-z0-9]+$/; // 匹配字母和数字
console.log(pattern2.test("1781311111"))
*/

// P.121
// Number的toFixed()取小数位，四舍五入
/*
var num = 10.005;
console.log(num.toFixed(2));
*/

// P.136
// Math方法
// 随机一个1-10之间的数值
/*
var num = Math.floor(Math.random() * 10 + 1);
console.log(num);
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}
// 随机选颜色
var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
var color = colors[selectFrom(0, colors.length - 1)];
console.log(color);
*/
var str = String(1)
console.log(str)
console.log(typeof str)