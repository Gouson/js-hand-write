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