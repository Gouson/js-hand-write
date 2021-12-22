//JS中相等的判断
var a = 1
var b = '1'
var res = Object.is(a, b)
console.log(res)

var c = +0
var d = -0
var res1 = Object.is(c, d)
console.log(res1)

var e = NaN
var f = NaN
var res2 = Object.is(e, f)
console.log(res2)

console.log(Object.is(null, null))
console.log(Object.is({}, {}))