function kuaipai(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const center = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < center) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return kuaipai(left).concat([center]).concat(kuaipai(right))
}

console.log(kuaipai([33, 1, 2, 3, 5, 56, 32, 23, 4]))