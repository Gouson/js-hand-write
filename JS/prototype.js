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