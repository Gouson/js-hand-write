var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

var newArr = Array.from(obj)
console.log(newArr)

obj.length = 2
newArr = Array.from(obj)
console.log(newArr)

obj.length = 4
newArr = Array.from(obj)
console.log(newArr)

var obj2 = {
    0: 1,
    1: 2,
    2: 3
}
newArr2 = Array.from(obj2)
console.log(newArr2, newArr2.length)

var obj3 = {
    0: 1,
    1: 2,
    2: 3,
    push: [].push
}
obj3.push(4)
console.log(obj3)