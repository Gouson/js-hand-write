class MyPromise {
    constructor(exe) {
        this.value = undefined
        this.status = 'pendding'
        this.successQueue = []
        this.failureQueue = []

        const resolve = () => {
            const doResolve = (value) => {
                if (this.status === 'pendding') {
                    this.status = 'success'
                    this.value = value

                    while (this.successQueue.length) {
                        const cb = this.successQueue.shift()
                        cb && cb(this.value)
                    }
                }
            }
            setTimeout(doResolve, 0)
        }

        const reject = () => {
            const doReject = (value) => {
                if (this.status === 'pendding') {
                    this.stauts = 'failure'
                    this.value = value
                    while (this.failureQueue.length) {
                        const cb = this.failureQueue.shift()
                        cb && cb(this.value)
                    }
                }
            }
            setTimeout(doReject, 0)
        }
        exe(resolve, reject)
    }

    then(success = (value) => value, failure = (value) => value) {
        return new MyPromise((resolve, reject) => {
            const successFn = (value) => {
                try {
                    const result = success(value)
                    result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }

            const failureFn = (value) => {
                try {
                    const result = failure(value)
                    result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
                } catch (e) {
                    reject(e)
                }
            }

            if (this.status === 'pendding') {
                this.successQueue.push(successFn)
                this.failureQueue.push(failureFn)
            } else if (this.status === 'success') {
                success(this.value)
            } else {
                failure(this.value)
            }
        })
    }
}



const pro = new MyPromise((resolve, reject) => {
    setTimeout(resolve, 1000)
    setTimeout(reject, 2000)
})

pro
    .then(() => {
        console.log('2_1')
        const newPro = new MyPromise((resolve, reject) => {
            console.log('2_2')
            setTimeout(reject, 2000)
        })
        console.log('2_3')
        return newPro
    })
    .then(
        () => {
            console.log('2_4')
        },
        () => {
            console.log('2_5')
        }

    )

pro
    .then(
        data => {
            console.log('3_1')
            throw new Error()
        },
        data => {
            console.log('3_2')
        }
    )
    .then(
        () => {
            console.log('3_3')
        },
        e => {
            console.log('3_4')
        }
    )
// 2_1
// 2_2
// 2_3
// 3_1
// 3_4
// 2_5