var obj = {
    get a() {
        return Math.random() >= 0.5 ? 1 : 0
    }
}

const round = obj.__lookupGetter__('a') //该方法已废弃,但是兼容性很好

const round2 = Object.getOwnPropertyDescriptor(obj, 'a').get

const round3 = obj.__defineGetter__('a', function() {
    return 'get a'
})
console.log(round, round2, obj.a)

Object.myIs = function(a, b) {
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b
    }
    return a !== a && b !== b
}

const myRes = Object.myIs({}, {})
console.log(myRes)