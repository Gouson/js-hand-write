const _instanceOf = (obj, func) => {
    if (obj === null || typeof obj !== 'object') {
        return false
    }

    let proto = obj
    while (proto) {
        if (proto === null) {
            return false
        } else if (proto === func.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

// 测试
let Fn = function() {}
let p1 = new Fn()

console.log(_instanceOf({}, Object)) // true
console.log(_instanceOf(p1, Fn)) // true
console.log(_instanceOf({}, Fn)) // false
console.log(_instanceOf(null, Fn)) // false
console.log(_instanceOf(1, Fn)) // false