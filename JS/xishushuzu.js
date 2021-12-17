const arr = [1, , 2, 3]
arr.find(item => {
    console.log(item) //1 undefined 2 3
})
arr.forEach(item => {
    console.log(item) //1 2 3
})