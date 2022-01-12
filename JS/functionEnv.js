//构造函数
function Foo() {
    //全局变量赋值
    //如果Foo没有执行，下面的赋值行为不会发生
    getName = function() {
        console.log(1)
    }

    //直接执行Foo，this指向window
    return this
}

//函数Foo上的静态方法 → 一个函数上对象上的方法/属性
Foo.getName = function() {
    console.log(2)
}

//扩展函数原型上的方法
//var foo = new Foo() → foo.getName
// new Foo().getName
Foo.prototype.getName = function() {
    console.log(3)
}


//给全局变量赋值为一个匿名函数
// GO{
//     getName:
//              undefined →
//              funciton getName(){} →
//              function(){console.log(4)}
// }
var getName = function() {
    console.log(4)
}

//函数声明 提升到最顶部
function getName() {
    console.log(5)
}


//执行Foo函数上的静态方法
Foo.getName(); //2

//执行当前环境下的
getName(); // 5 → 4 this → window

//Foo() → this → window → window.getName()
Foo().getName(); //1

//window.getName() → 1 → getName() → 1
getName() //1

//Foo.getName() → console.log(2) → 2
//this → 新的实例化对象{}
new Foo.getName() //2

//new Foo() → foo
// foo.getName → Foo.prototype.getName → console.log(3)
new Foo().getName() // 3

//拆开
//new ((new Foo()).getName)()
//var foo = new Foo()
//foo.getName() → Foo.prototype.getName
//new function(){console.log(3)} ()
new new Foo().getName() // 3