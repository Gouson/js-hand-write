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

    const target = new origin.constructor()
    for (let k in origin) {
        if (origin.hasOwnProperty(k)) {
            target[k] = deepClone(origin[k])
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