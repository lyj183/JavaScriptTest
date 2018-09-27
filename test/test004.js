// http://momentjs.cn/docs/

/* 引入moment库 */
var moment = require('moment');

// 获取当前时间
var time001 = new Date();
console.log("time001: " + time001);
// 第二天
time001.setTime(time001.getTime()+24*60*60*1000);
console.log("time001: " + time001);
// 时间戳
console.log("moment(time001): " + moment(time001));
// 时间格式化
console.log("moment(time001).format('YYYY-MM-DD HH:mm:ss'): " + moment(time001).format('YYYY-MM-DD HH:mm:ss'));

// 获取当前时间戳，三种方法
var time002 = Date.parse(new Date());
console.log("time002: " + time002);

var time003 = (new Date()).valueOf();
console.log("time003: " + time003);

var time004 = (new Date()).getTime();
console.log("time004: " + time004);