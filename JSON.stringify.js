 const jsonstringify = (data) => {
     const isCyclic = (obj) => {
         let stackSet = new Set()
         let detected = false
         const detect = (obj) => {
             if (obj && typeof obj != 'object') {
                 return
             }

             if (stackSet.has(obj)) {
                 return detected = true
             }

             stackSet.add(obj)

             for (let key in obj) {
                 if (obj.hasOwnProperty(key)) {
                     detect(obj[key])
                 }
             }

             stackSet.delete(obj)
         }

         detect(obj)

         return detected
     }

     if (isCyclic(data)) {
         throw new TypeError('Converting circular structure to JSON')
     }

     if (typeof data === 'bigint') {
         throw new TypeError('Do not know how to serialize a BigInt')
     }

     const type = typeof data
     const commonKeys1 = ['undefined', 'function', 'symbol']
     const getType = (s) => {
         return Object.prototype.toString.call(s).replace(/\[object (.*?)\]/, '$1').toLowerCase()
     }

     if (type !== 'object' || data === null) {
         let result = data
         if ([NaN, Infinity, null].includes(data)) {
             result = 'null'
         } else if (commonKeys1.includes(type)) {
             return undefined
         } else if (type === 'string') {
             result = '"' + data + '"'
         }
         return String(result)
     } else if (type === 'object') {
         if (typeof data.toJSON === 'function') {
             return jsonstringify(data.toJSON())
         } else if (Array.isArray((data))) {
             let result = data.map((it) => {
                 return commonKeys1.includes(typeof it) ? 'null' : jsonstringify(it)
             })
             return `[${result}]`.replace(/'/g, '"')
         } else {
             if (['boolean', 'number'].includes(getType(data))) {
                 return String(data)
             } else if (getType(data) === 'string') {
                 return '"' + data + '"'
             } else {
                 let result = []

                 Object.keys(data).forEach((key) => {
                     if (typeof key !== 'symbol') {
                         const value = data[key]

                         if (!commonKeys1.includes(typeof value)) {
                             result.push(`"${key}":${jsonstringify(value)}`)
                         }
                     }
                 })
                 return `{${result}}`.replace(/'/, '"')
             }
         }
     }
 }



 // 1. 测试一下基本输出
 console.log(jsonstringify(undefined)) // undefined
 console.log(jsonstringify(() => {})) // undefined
 console.log(jsonstringify(Symbol('前端胖头鱼'))) // undefined
 console.log(jsonstringify((NaN))) // null
 console.log(jsonstringify((Infinity))) // null
 console.log(jsonstringify((null))) // null
 console.log(jsonstringify({
     name: '前端胖头鱼',
     toJSON() {
         return {
             name: '前端胖头鱼2',
             sex: 'boy'
         }
     }
 }))
 // {"name":"前端胖头鱼2","sex":"boy"}

 // 2. 和原生的JSON.stringify转换进行比较
 console.log(jsonstringify(null) === JSON.stringify(null));
 // true
 console.log(jsonstringify(undefined) === JSON.stringify(undefined));
 // true
 console.log(jsonstringify(false) === JSON.stringify(false));
 // true
 console.log(jsonstringify(NaN) === JSON.stringify(NaN));
 // true
 console.log(jsonstringify(Infinity) === JSON.stringify(Infinity));
 // true
 let str = "前端胖头鱼";
 console.log(jsonstringify(str) === JSON.stringify(str));
 // true
 let reg = new RegExp("\w");
 console.log(jsonstringify(reg) === JSON.stringify(reg));
 // true
 let date = new Date();
 console.log(jsonstringify(date) === JSON.stringify(date));
 // true
 let sym = Symbol('前端胖头鱼');
 console.log(jsonstringify(sym) === JSON.stringify(sym));
 // true
 let array = [1, 2, 3];
 console.log(jsonstringify(array) === JSON.stringify(array));
 // true
 let obj = {
     name: '前端胖头鱼',
     age: 18,
     attr: ['coding', 123],
     date: new Date(),
     uni: Symbol(2),
     sayHi: function() {
         console.log("hello world")
     },
     info: {
         age: 16,
         intro: {
             money: undefined,
             job: null
         }
     },
     pakingObj: {
         boolean: new Boolean(false),
         string: new String('前端胖头鱼'),
         number: new Number(1),
     }
 }
 console.log(jsonstringify(obj) === JSON.stringify(obj))
 // true
 console.log((jsonstringify(obj)))
 // {"name":"前端胖头鱼","age":18,"attr":["coding",123],"date":"2021-10-06T14:59:58.306Z","info":{"age":16,"intro":{"job":null}},"pakingObj":{"boolean":false,"string":"前端胖头鱼","number":1}}
 console.log(JSON.stringify(obj))
 // {"name":"前端胖头鱼","age":18,"attr":["coding",123],"date":"2021-10-06T14:59:58.306Z","info":{"age":16,"intro":{"job":null}},"pakingObj":{"boolean":false,"string":"前端胖头鱼","number":1}}

 // 3. 测试可遍历对象
 let enumerableObj = {}

 Object.defineProperties(enumerableObj, {
     name: {
         value: '前端胖头鱼',
         enumerable: true
     },
     sex: {
         value: 'boy',
         enumerable: false
     },
 })

 console.log(jsonstringify(enumerableObj))
 // {"name":"前端胖头鱼"}

 // 4. 测试循环引用和Bigint

 let obj1 = {
     a: 'aa'
 }
 let obj2 = {
     name: '前端胖头鱼',
     a: obj1,
     b: obj1
 }
 obj2.obj = obj2

 console.log(jsonstringify(obj2))
 // TypeError: Converting circular structure to JSON
 console.log(jsonStringify(BigInt(1)))
 // TypeError: Do not know how to serialize a BigInt