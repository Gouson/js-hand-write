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

function deepClone(origin, target) {
    var tar = target || {}
    var toStr = Object.prototype.toString
    var arrType = '[object Array]'
    for (var k in origin) {
        if (origin.hasOwnProperty(k)) {
            if (typeof origin[k] === 'object' && origin[k] !== null) {
                tar[k] = toStr.call(origin[k]) === arrType ? [] : {}
                deepClone(origin[k], tar[k])
            } else {
                tar[k] = origin[k]
            }
        }
    }
    return tar
}

const newObj = deepClone(obj, {})

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