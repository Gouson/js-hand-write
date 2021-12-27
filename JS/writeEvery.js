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

var res = arr.every(function(item, index, array) {
    return item.age > 25
})
console.log(res);

Array.prototype.myEvery = function(cb) {
    var _arr = this
    var _len = _arr.length
    var _arg2 = arguments[1] || window
    var _item
    var _res = true
    for (var i = 0; i < _len; i++) {
        _item = deepClone(_arr[i])
        if (!cb.apply(_arg2, [_item, i, _arr])) {
            _res = false
            break
        }
    }
    return _res
}