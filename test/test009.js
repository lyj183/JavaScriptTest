var person1 = {};
// 浅拷贝
var onePerson = person1;
onePerson.name = 'ONE';
console.log(onePerson.name);
console.log(person1.name);
// 深拷贝
var person2 = {};
var twoPerson = JSON.parse(JSON.stringify(person2));
twoPerson.name = 'TWO';
console.log(twoPerson.name);
console.log(person2.name);