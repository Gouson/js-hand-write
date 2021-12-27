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
var obj = {
    name: 'jack'
}
var newArray = arr.some(function(item, index, array) {
    return item.age > 25
}, obj)

console.log(newArray)

Array.prototype.mySome = function(cb) {
    var _arr = this
    var _len = _arr.length;
    if (_len === 0) {
        return false
    }

    var _arg2 = arguments[1] || window
    var _item
    var _res = false
    for (var i = 0; i < _len; i++) {
        _item = deepClone(_arr[i])
        if (cb.apply(_arg2, [_item, i, _arr])) {
            _res = true
            break
        }
    }
    return _res
}