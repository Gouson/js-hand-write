var obj = {
    name: 'Jack',
    age: 34,
    info: {
        hobby: ['travel', 'reading', {
            a: '1'
        }],
        career: {
            teacher: 4,
            engineer: 9
        }
    }
}

function deepClone(origin, hashMap = new WeakMap()) {
    if (origin == undefined || typeof origin !== 'object') {
        return origin
    }
    if (origin instanceof Date) {
        return new Date(origin)
    }
    if (origin instanceof RegExp) {
        return new RegExp(origin)
    }

    const hashKey = hashMap.get(origin)
    if (hashKey) {
        return hashKey;
    }
    const target = new origin.constructor()
    hashMap.set(origin, target)
    for (let k in origin) {
        if (origin.hasOwnProperty(k)) {
            target[k] = deepClone(origin[k], hashMap)
        }
    }
    return target
}




const newObj = deepClone(obj)

newObj.info.hobby[2].a = 123

console.log(obj, newObj)
/***
{
    name: 'Jack',
    age: 34,
    info: {
        hobby: ['travel', 'reading', {
            a: '1'
        }],
        career: {
            teacher: 4,
            engineer: 9
        }
    }
}
{
    name: 'Jack',
    age: 34,
    info: {
        hobby: ['travel', 'reading', {
            a: '123'
        }],
        career: {
            teacher: 4,
            engineer: 9
        }
    }
}
***/

//hashMap解决循环问题
let test1 = {}
let test2 = {}
test2.test1 = test1
test1.test2 = test2

console.log(deepClone(test1))