// async 和 await
// 参考：https://segmentfault.com/a/1190000007535316
/*
async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);  // 输出 Promise { 'hello async' }

testAsync().then(v => {
    console.log(v);    // 输出 hello async
})

function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();
*/

// 参考：https://www.cnblogs.com/SamWeb/p/8417940.html
// 异步函数定义
async function timeout() {
    return 'hello world';
}
// 异步函数执行
console.log(timeout()); // async返回一个Promise对象
console.log('虽然在后面，但是我先执行');
// 获取Promise返回值，用then方法
timeout().then(result => {
    console.log(result);
})
console.log('虽然在后面，但是我先执行');

// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    } )
}
// 使用await
// await 表示等一下，代码就暂停到这里，不再向下执行了，它等什么呢？等后面的promise对象执行完毕，然后拿到promise resolve 的值并进行返回，返回值拿到之后，它继续向下执行。
async function testResult() {
    let result = await doubleAfter2seconds(30);
    console.log(result);
}
// 调用testResult 函数
testResult();