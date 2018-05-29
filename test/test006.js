// async 和 await
// 参考：https://segmentfault.com/a/1190000007535316

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