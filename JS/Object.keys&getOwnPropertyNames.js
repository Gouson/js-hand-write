var obj = {
    a: 1,
    b: 2,
    c: 3
}

Object.defineProperty(obj, 'b', {
    enumerable: false
})

console.log(Object.keys(obj)) //[“a”,"c"]

//忽略描述符 - enumerable: false
console.log(Object.getOwnPropertyNames(obj)) //[“a”,"b","c"]