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

var initialValue = [{
    name: '小明'
}]
var i = 0
var newArr = arr.reduce(function(prev, item, index, array) {
    i++
    item.age >= 25 && prev.push(item)
    return prev
}, initialValue)
console.log(newArr)
/**[{name:'小明'},
    {
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
    }]
    **/

Array.prototype.myReduce = function(cb, initialValue) {
    var _arr = this
    var _len = _arr.length
    var _arg3 = arguments[2] || window
    var _item
    for (var i = 0; i < _len; i++) {
        _item = deepClone(_arr[i])
        initialValue = cb.apply(_arg3, [initialValue, _item, i, _arr])
    }
    return initialValue
}
Array.prototype.myReduceRight = function(cb, initialValue) {
    var _arr = this
    var _len = _arr.length
    var _arg3 = arguments[2] || window
    var _item
    for (var i = _len; i >= 0; i--) {
        _item = deepClone(_arr[i])
        initialValue = cb.apply(_arg3, [initialValue, _item, i, _arr])
    }
    return initialValue
}