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
var newArray = arr.map(function(item, index, array) {
    item.age += 100
    return item
}, obj)

console.log(newArray)

Array.prototype.myMap = function(cb) {
    var _arr = this
    var _len = _arr.length
    var _arg2 = arguments[1] || window
    var _newArr = []
    var _item
    var _res
    for (var i = 0; i < _len; i++) {
        _item = deepClone(_arr[i])
        _res = cb.apply(_arg2, [_item, i, _arr])
        _res && _newArr.push()
    }
    return _newArr
}