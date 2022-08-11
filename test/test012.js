// 练习
// ====== 1.数组内随机数 ====== 
const randomIndex = Math.floor(Math.random() * (1e6+9)) % 11
console.log(randomIndex)

// ====== 2.打印对象 ====== 
const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23
      }
    }
  }
}; 
// console.log(obj)
console.log(JSON.stringify(obj, null, 2)); // 其中 2 是用于缩进的空格数。

// ====== 3.Symbol ====== 
// 例子3.1 重复
const persons = {
  'bruce': 'wayne',
  'bruce': 'banner'
 }; 
console.log(persons.bruce); // 'banner'

// 例子3.2 用Object.freeze
// 如果这么写，getTodo(1)是-看电影
// const DAYS = Object.freeze({
// monday: 1,
// tuesday: 2,
// wednesday: 3
// });


// 例子3.3 使用Symbol
const DAYS = Object.freeze({
  monday: Symbol('monday'),
  tuesday: Symbol('tuesday'),
  wednesday: Symbol('wednesday')
});
function getTodo(day) {
  switch (day) {
    case DAYS.monday:
    return "看电影";
    case DAYS.tuesday:
    return "购物";
    case DAYS.wednesday:
    return "健身";
    default:
    return "日期错误";
  }
}; 
console.log(getTodo(1)); // 日期错误
console.log(DAYS.monday); // Symbol(monday)
console.log(getTodo(DAYS.monday)); // 看电影

// 例子3.2 其他使用Symbol的例子
const CACHE_KEY = Symbol.for('20220810#Gemini');
console.log("CACHE_KEY: ", CACHE_KEY); // Symbol(20220810#Gemini)
console.log("Symbol.keyFor(CACHE_KEY): ", Symbol.keyFor(CACHE_KEY)); // '20220810#Gemini'

const data1 = {}; 
data1.CACHE_KEY = 'm'; 
data1[CACHE_KEY] = 'n'; 
console.log("data: ", data1); // { CACHE_KEY: 'm', [Symbol(20220810#Gemini)]: 'n' }
console.log("data.CACHE_KEY: ", data1.CACHE_KEY); // m
console.log("data[CACHE_KEY]: ", data1[CACHE_KEY]); // n

const UUID = Symbol('RiskManager#uuid');
const data2 = {};
data2[UUID] = "uuid";
console.log(UUID); // Symbol(RiskManager#uuid)
console.log(data2[UUID]); // uuid
console.log(data2); // { [Symbol(RiskManager#uuid)]: 'uuid' }


// 例子3.3 Symbol和Symbol.for的区别
// key是字符串
// Symbol(key)：每个从 Symbol() 返回的 symbol 值都是唯一的。
// Symbol.for(key)：返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol。

// 区别：
// 用Symbol.for()方法创建的 symbol 会被放入一个全局 symbol 注册表中。Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。
// 创建Symbol
let s = Symbol();
let s2 = Symbol('lll');
let s3 = Symbol('lll');
console.log("typeof s: ", typeof s); // 'symbol'
console.log("s2: ", s2); // Symbol(lll)
console.log("s3: ", s3); // Symbol(lll)
console.log("s2 === s3: ", s2 === s3); // false
console.log(Symbol.keyFor(s2)); // undefined
//Symbol.for 创建
let s4 = Symbol.for('qqq');
let s5 = Symbol.for('qqq');
console.log("s4: ", s4); // true
console.log("s5: ", s5); // true
console.log("s4 === s5: ", s4 === s5); // true
console.log(Symbol.keyFor(s4)); // qqq


