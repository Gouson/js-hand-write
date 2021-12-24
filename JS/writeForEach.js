var arr = [{
        name: '张三',
        age: 34
    },
    {
        name: '李四',
        age: 25
    },
    {
        name: '王五',
        age: 28
    },
    {
        name: '赵六',
        age: 18
    },
]

//第一个参数是回调函数，第二个函数是回调函数中的this指向，可以不传
//回调函数第一个参数 item 每个元素本身
//回调函数第二个参数 index 该元素的数组下标
//回调第三个参数 array 该数组本身
var thisObj = {
    a: 1
}
arr.forEach(function(item, index, array) {
    console.log(item, index, array)
    console.log(this)
}, thisObj)


Array.prototype.myForEach = function(cb) {
    var _arr = this
    var _len = _arr.length
    var _arg2 = arguments[1] || window

    for (var i = 0; i < _len; i++) {
        cb.apply(_arg2, [_arr[i], i, _arr])
    }
}