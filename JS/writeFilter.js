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

var newArr = arr.filter(function(item, index, array) {
    return item.age > 25
})
console.log(newArr)

Array.prototype.myFilter = function(cb) {
    var _arr = this
    var _len = _arr.length
    var _arg2 = arguments[1] || window
    var _newArr = []
    var _item
    for (var i = 0; i < _len; i++) {
        _item = deepClone(_arr[i])
        cb.apply(_arg2, [_item, i, _arr]) ? _newArr.push(_item) : ''
    }
    return _newArr
}