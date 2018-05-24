// Object.keys() / Object.values() / Object.entries()
var obj = { foo: "bar", baz: 42 };
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
var map = new Map(Object.entries(obj));
console.log(map)