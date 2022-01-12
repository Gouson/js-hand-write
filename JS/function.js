//函数的定义方式
const test = new Function('a', 'b', 'c', 'console.log(a,b,c)')
//等同于 const test = new Function('a, b, c', 'console.log(a,b,c)') 
//function test(a,b,c){console.log(a,b,c)}
test(1, 2, 3) //1,2,3


//题目
var a = 1
var b = 2

function fn() {
    var b = 3
    return new Function('c', 'console.log(a+b+c)')
}
var t = fn()
t(4)
//浏览器中 7，这种方式不会在作用域创建闭包，所创建函数在global中
//node中 ReferenceError: a is not defined

function fn_eval() {
    var b = 3
    eval('!function _(c){console.log(a+b+c)}(4)')
}
fn_eval(4) //8  eval直接执行可以访问到作用域内的b 



//题目2
var t1 = new Function('console.log("t1")')
var t2 = Function('console.log("t2")')
t1() //t1
t2() //t2
//以调用函数的方式调用Function的构造函数（而不是new关键字）跟以构造函数来调用时一样的
console.log(t1.__proto__ === Function.prototype) //true
console.log(Function.__proto__ === Function.prototype) //true


//用eval执行代码
var code = 'function anonymous(){console.log("t1")}'
eval(`!${code}()`) //t1


/**
 * Function 的应用主要用来执行字符串
 * 前端 -> 字符串的ES6的代码 -> 后端 -> 字符串中的ES6部分 -> AST树 -> ES5 -> 
 * 新的字符串代码 -> 前端 -> new Function 声明函数 ->传入字符串
 */




/**
 * 题目1
 */
var x = 1

// function _test(x, y = function () {
//     x = 3
//     console.log(x)
// }) {
//     console.log(x) // 编译第三步，形实参相统一 x -> undefined
//     var x = 2
//     y() //参数作用域y执行 -> 参数作用域x -> 3
//     console.log(x) //_test局部作用域x -> 2
// }
// _test()
// console.log(x) //全局作用域x -> 1

//undefined 3 2 1




/**
 * 题目2
 */
// var x = 1

// function _test(x, y = function () {
//     x = 3
//     console.log(x)
// }) {
//     console.log(x) // 编译第三步，形实参相统一 x -> undefined
//     y() //参数作用域y执行 -> 参数作用域x -> 3
//     console.log(x) // 参数作用域x -> 3
// }
// _test()
// console.log(x) //全局作用域x -> 1

//undefined 3 3 1



/**
 * 题目3
 */
// var x = 1

// function _test(a, y = function () {
//     x = 3
//     console.log(x)
// }) {
//     console.log(x) //保存局部变量x到 -> undefined
//     var x = 2
//     y() //全局作用域x -> 3
//     console.log(x) //局部作用域x -> 2
// }
// _test()
// console.log(x) //通过参数y函数执行将全局的x -> 3

//undefined 3 2 3


/**
 * 题目4
 */
// var x = 1

// function _test(x = 4, y = function () {
//     x = 3
//     console.log(x)
// }) {
//     console.log(x) //预编译第三步，形实参相统一 x -> 4
//     var x = 2
//     y() //参数y执行 -> 参数x -> 3
//     console.log(x) //局部作用域x -> 2
// }
// _test()
// console.log(x) //全局作用域 1

//4 3 2 1


/**
 * 题目5
 */

var x = 1

function yy() {
    x = 3
    console.log(x)
}

function _test(x = 4, y = yy) {
    console.log(x) //预编译第三步，形实参相统一 x -> 4
    var x = 2
    y() //相当于定义在全局的yy函数引用执行 -> 全局变量中的x -> 3
    console.log(x) //局部作用域x -> 2
}
_test()
console.log(x) //全局作用域 3
//4 3 2 3

/**
 * 从test内部出发 -> 全局
test函数局部作用域 -> 局部有没有这个东西 -> 没有 -> 找参数作用域
test函数参数作用域 -> 参数有没有这个东西 -> 没有 ->  找全局作用域
全局作用域 ->  没有 -> undefined
 */





/**
 * 题目6
 */
Array.prototype.myForEach = async function (callback, thisArg) {
    const _arr = this,
        _isArray = Array.isArray(_arr),
        _thisArg = thisArg ? Object(thisArg) : window
    if (!_isArray) {
        throw new TypeError("the caller must be the type 'Array'")
    }
    for (let i = 0; i < _arr.length; i++) {
        await callback.call(_thisArg, _arr[i], i, _arr)
    }
}
fun([
    () => console.log('start'),
    () => sleep(1000),
    () => console.log('1'),
    () => sleep(2000),
    () => console.log('2'),
    () => sleep(3000),
    () => console.log('end'),
])


function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function fun(arr) {
    arr.myForEach(async (fn) => {
        await fn()
    });
    //另一种
    // for (let i = 0; i < arr.length; i++) {
    //     await arr[i]()
    // }
}