// Object.keys() / Object.values() / Object.entries()
// var obj = { foo: "bar", baz: 42 };
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// var map = new Map(Object.entries(obj));
// console.log(map);

// 对象元素添加
/*
var str = '';
var str1 = '';
var obj1 = {};
var key = [1, 2, 3];
var label = ['看看', '听听', '说说'];
for(let i=0; i<key.length; i++) {
    str += `{${key[i]}:${label[i]}}`;
    obj1[key[i]]=label[i];
    if(i<key.length-1) {
        str1 += label[i] + '、'
    } else if(i=key.length-1) {
        str1 += label[i]
    }

}
console.log(obj1);
console.dir(JSON.stringify(obj1));
console.dir(str1);

console.log(label.join())
*/

// 对象key替换
var obj = {code : '111', name : '值', childrenOrgList: {code : '111-1', name : '值2'}};
var arr = [{code : '111', name : '值', childrenOrgList: {code : '111-1', name : '值2'}}, {code : '111', name : '值', childrenOrgList: {code : '111-1', name : '值2'}}]
var id = 'id';
var label = 'label';
var children = 'children';

// // 复制原来的值
// obj[id] = obj['code'];
// // 删除原来的键
// delete obj['code'];
// // 复制原来的值
// obj[label] = obj['name'];
// // 删除原来的键
// delete obj['name'];
// // 复制原来的值
// obj[children] = obj['childrenOrgList'];
// // 删除原来的键
// delete obj['childrenOrgList'];
//
// console.log(obj)

for (var i=0; i<arr.length; i++) {
    // 复制原来的值
    arr[i][id] = arr[i]['code'];
// 删除原来的键
    delete arr[i]['code'];
// 复制原来的值
    arr[i][label] = arr[i]['name'];
// 删除原来的键
    delete arr[i]['name'];
// 复制原来的值
    arr[i][children] = arr[i]['childrenOrgList'];
// 删除原来的键
    delete arr[i]['childrenOrgList'];
    if (i==1) {
        delete arr[i]
    }


}
console.log(arr)



