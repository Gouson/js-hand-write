/** 
 * 立即执行函数 
 * IIFE
 * Immediately Incoked Function Expression
 * 立即         调用    （函数      表达式）
 */


//函数声明 !== 函数表达式
function test1() {
    console.log('Function declaration!')
}

//把一个（匿名）函数（函数声明式）赋值给一个变量的形式叫做函数表达式
var test2 = function () {
    console.log('Function Expression')
}


//()对于函数名后面的括号，叫做执行符号
test1()
test2()


//语法错误，执行符号只能跟在函数表达式后面
// function test() {
//     console.log('Function Declaration')
// }()


//当一个函数需要立即执行的情况，该函数必须形成表达式形式
var a = function () {
    console.log('Function Expression')
}(); +
function () {
    console.log('Function Expression')
}();
//W3C推介
(function () {
    console.log('Function Expression')
}())
//实践中
;
(function () {
    console.log('Function Expression')
})()

;
(function test(a, b, c, d) {
    console.log(test) //f test..
    console.log(test.length) //4
    console.log(arguments.length) //3
    console.log('hello') //hello
})(1, 2, 3);

//立即执行函数是一个独立的作用域，立即执行函数不能在外部调用
//1.可以创建一个与外界没有任何关联的作用域，独立作用域
//2.执行完成以后，自动销毁
//3.ES3 ES5中没有模块的概念，立即执行函数模拟模块化
//向外部抛出一系列属性和方法
//window上保存属性和方法
test() //test is not deined