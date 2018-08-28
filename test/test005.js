// Object.keys() / Object.values() / Object.entries()
// var obj = { foo: "bar", baz: 42 };
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// var map = new Map(Object.entries(obj));
// console.log(map);

// 对象元素添加
var str = '';
var obj1 = {};
var key = [1, 2, 3];
var label = ['看看', '听听', '说说'];
for(let i=0; i<key.length; i++) {
    str += `{${key[i]}:${label[i]}}`;
    obj1[key[i]]=label[i];
}
console.log(obj1);
console.dir(JSON.stringify(obj1))
