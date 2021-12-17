var obj = {
    get a() {
        return Math.random() >= 0.5 ? 1 : 0
    }
}

const round = obj.__lookupGetter__('a') //该方法已废弃,但是兼容性很好
const round2 = Object.getOwnPropertyDescriptor(obj, 'a').get
console.log(round, round2)