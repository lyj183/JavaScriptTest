// 正则表达式
// https://segmentfault.com/a/1190000015101341?utm_source=channel-hottest

const reg1 = /all/;
console.log(reg1);
let a = 'This is all I have.'.replace(reg1, 'ALL');
console.log(a);

const reg2 = new RegExp('all');
console.log(reg2);
let b = 'This is all I have.'.replace(reg2, 'ALL');
console.log(b);