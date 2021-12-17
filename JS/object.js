var obj = {}
obj.a = 1
var newObj = new Object(obj)
console.log(newObj === obj) //true

var arr = [1, 2, 3]
var newArr = new Object(arr)
console.log(newArr === arr) //true

var str = 'abc'
console.log(str.length) //3
var a = 1
var newA = new Number(a)
console.log(a === newA) //false
console.log(a == newA) //true