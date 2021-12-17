var obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

const newArr = Array.from(obj, function(item, index) {
    return {
        studentId: this.prefix + item,
        order: index
    }
}, {
    prefix: 'No.'
})
console.log(newArr)
// [
//   { studentId: 'No.1', order: 0 },
//   { studentId: 'No.2', order: 1 },
//   { studentId: 'No.3', order: 2 }
// ]