/**
 * 对应名称
 * - prototype: 原型
 * - __proto__: 原型链(链接点)
 *
 * 从属关系
 * prototype → 函数的一个属性: 对象 {}
 * __proto__ → 对象Object的一个属性：对象 {}
 * 对象的__proto__保存着该对象的构造函数的prototype
 */

function Test() {
    this.a = 1
}
console.log(Test.prototype)

const test = new Test()
console.log(test.__proto__)
console.log(test.__proto__ === Test.prototype)

console.log(Test.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null



Test.prototype.b = 2
Object.prototype.c = 3
/**
 * test{
 *   a:1,
 *   __proto__:Test.prototype={
 *     b:2,
 *     __proto__:Object.prototype={
 *       c:3,
 *       x __proto__
 *     }
 *   }
 * }
 */
console.log(test.a) //1
console.log(test.b) //2
console.log(test.c) //3

//Function Object 函数 对象
//Test函数本身是有Function构造，所以Test也有 __proto__
console.log(Test.__proto__ === Function.prototype) //true
//也就是说 底层是
// const Test = new Function()

//那Function本身由谁构造呢
console.log(Function.__proto__ === Function.prototype) //true  在Function这里是特殊的，自己由自己构造

// const obj = {}
// const obj=new Object()
//Object 本身也是函数
console.log(Object.__proto__ === Function.prototype) //true  Object 由Function构造

//由上可知 
console.log(Object.__proto__ === Function.__proto__) //true

//判断对象本身的属性，不包含原型链
console.log(test.hasOwnProperty('a')) //true
console.log(test.hasOwnProperty('b')) //false 继承而来的属性
console.log(test.hasOwnProperty('c')) //false 继承而来的属性

//判断包含原型链上的属性
console.log('a' in test) //true
console.log('b' in test) //true
console.log('c' in test) //true

//constructor指向实例的构造函数，并且可以被修改
console.log(test.constructor === Test) //true
function Test1() {
    this.a = 1111
}
test.constructor = Test1
console.log(test) //{ a: 1, constructor: [Function: Test1] }