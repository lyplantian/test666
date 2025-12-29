// let 命令
// let 是在代码块内有效，var 是在全局范围内有效
// let 只能声明一次 var 可以声明多次
// let 不存在变量提升，var 会变量提升

// const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。
// ES6 明确规定，代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。
// 代码块内，在声明变量 PI 之前使用它会报错。
/*
var PI = "a";
{
    console.log(PI);  // ReferenceError: PI is not defined
    const PI = "3.1415926";
}
*/
// 使用 const 声明复杂类型对象时要慎重

// 解构赋值
/*let [a,[[b],c]] = [1,[[2],4]];
console.log(a + "..." + b + "..." + c);*/

/*let[a,...b] = [1,2,3,4]; //剩余运算符
console.log(a); //1
console.log(b); //[ 2, 3, 4 ]*/

/*let [a,b,c,d,e] = "1234j";
console.log("" + a+b+c+d+e);//1234j */

/*let [a = 2] = [undefined]; // a = 2
console.log(a);*/

// 当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。
/*let [a = 3, b = a] = [];     // a = 3, b = 3
let [a = 3, b = a] = [1];    // a = 1, b = 1
let [a = 3, b = a] = [1, 2]; // a = 1, b = 2*/

// 对象模型的解构（Object）

/* //基本
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// foo = 'aaa'
// bar = 'bbb'

let {baz: foo} = {baz:"ddd"}; // foo = 'ddd'
// foo = 'ddd'
*/


// 可嵌套可忽略
/*let obj = {p: ['hello', {y: 'world'}]};
let {p: [x, {y}]} = obj;
// x = 'hello'
// y = 'world'

let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, {  }] } = obj;
// x = 'hello'
// y = "hello"*/

// 不完全解析
/*let obj = {p: [{y: "world"}]};
let {p: [{y}, x]} = obj;
console.log("x: " + x);
console.log("y: " + y);*/

// 剩余运算符
/*let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
// a = 10
// b = 20
// rest = {c: 30, d: 40}*/

// 解构默认值
// let {a = 10, b = 5} = {a: 3}; // a = 3; b = 5;
// let {a: aa = 10, b: bb = 5} = {a : 3}; // aa = 3; bb = 5;

/*
function Sum(...nums){
    return nums.reduce((x,y) => {return x+y});
}
*/

// ES6中引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名
// Symbol 是原始数据类型，不是对象
/*let sy = Symbol("kk");
console.log(sy); // Symbol(kk)
console.log(typeof sy); //symbol*/

// let sy = Symbol("key1");
//写法1
// let sysObj1 = {};
// sysObj1[sy]= "kk";
// console.log(sysObj1);

// 写法2
// let sysObj2 = {
//     [sy]:"KK"
// };
//
// console.log(sysObj2);
// console.log(sysObj2[sy]);

/*let sy = Symbol("key1");
let syObject = {};
syObject[sy] = "kk";

for (let i in syObject) {
    console.log(i); //无输出
}*/

// 读取对象的Symbol属性
/*let attrObject1 = Object.getOwnPropertySymbols(syObject);
let attrObject2 =Reflect.ownKeys(syObject);
console.log(attrObject1);
console.log(attrObject2);*/

// 定义常量
/*
const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");

function ColorException(message) {
    this.message = message;
    this.name = "ColorException";
}
function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            return "COLOR_RED";
        case COLOR_YELLOW :
            return "COLOR_YELLOW ";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        default:
            throw new ColorException("Can't find this color");
    }
}

try {

    var color = COLOR_RED; // green 引发异常
    var colorName = getConstantName(color);
    console.log(colorName);
} catch (e) {
    var colorName = "unknown";
    console.log(e.message, e.name); // 传递异常对象到错误处理
}
*/

// Symbol.for()
// Symbol.for() 类似单例模式
/*let yellow = Symbol("yellow");
let yellow1 = Symbol.for("yellow");

console.log(yellow === yellow1);//false

let yellow2 = Symbol.for("yellow");
console.log(yellow1 === yellow1); //true*/

// Symbol.keyFor()
/*let yellow1 = Symbol.for("Yellow111");

console.log(Symbol.keyFor(yellow1)); //Yellow111*/

// ES6 Map 与 Set

// var myMap = new Map();
// var keyString = "a string"; //key 是字符串
// var keyString = {}; //key 是对象
// var keyString = function () {
//
// }; //key 是函数

//
// myMap.set(keyString,"value");
// console.log(myMap.get(keyString));


// key是NaN
/*let myMap = new Map();
myMap.set(NaN, "value");

// console.log(myMap.get(NaN));

let otherNaN = Number("footer");

console.log(myMap.get(otherNaN));*/

// Map的迭代
// var myMap = new Map();
// myMap.set(2, "two");
// myMap.set(0, "zero");
// myMap.set(1, "one");

// for (let [key, value] of myMap) {
//     console.log(key + " = " + value);
// }

// for (let [key, value] of myMap.entries()) {
//     console.log(key + " = " + value);
// }

// myMap.forEach(function (value, key) {
//     console.log(key + ": " + value);
// }, myMap);

// map的合并
/*let first = new Map([[1,"one"],[2,"two"],[3,"three"]]);
let second = new Map([[1,'uno'],[2,'dos']]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
let merged = new Map([...first,...second]);
console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));*/

// Set
// let mySet = new Set();
/*mySet.add(+0);
mySet.add(-0);
mySet.add(undefined);
mySet.add(undefined);
mySet.add(NaN);
mySet.add(NaN);
console.log(mySet);*/

/*let o1 = {a:1,b:2};
let o2 = {a:1,b:2};
mySet.add(o1);
mySet.add(o2);
console.log(mySet);*/

// 数组去重
/*let mySet = new Set([1, 2, 3, 4, 4]);
let myArray = [...mySet];
console.log(myArray);*/

// 差集
/*let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// let difference = new Set([...a].filter(x => !b.has(x)));//{1}
let difference = new Set([...[...a].filter(x => !b.has(x)), ...[...b].filter(x => !a.has(x))]); //{ 1, 4 }

for (let s of difference) {
    console.log(s);
}*/

//ES6 Reflect 与 Proxy

/*let target = {
    name: "Tom",
    age: 24
};

let handler = {

    get: function (target, key) {
        console.log('getting ' + key);
        return target[key]; // 不是target.key
    },

    set: function (target, key, value) {
        console.log('setting ' + key);
        target[key] = value;
    }

};

// let proxy = new Proxy(target,handler);
// console.log(proxy.name);*/

/*let exam = {
    name: "Tom",
    age: 24
};
let proxy = new Proxy(exam, {
    get(target, propKey, receiver) {
        console.log('Getting ' + propKey);
        return target[propKey];
    }
});
console.log(proxy.name);
*/
/*let proxy = new Proxy({name:"888"}, {
    get(target, propKey, receiver) {
        // 实现私有属性读取保护
        if(propKey[0] === '_'){
            throw new Error(`Invalid attempt to get private "${propKey}"`);
        }
        console.log('Getting ' + propKey);
        return target[propKey];
    }
});
let obj = Object.create(proxy);
console.log(obj.name);*/

/*let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value;
    }
};

let proxy = new Proxy({},validator);
proxy.age = 100;

console.log(proxy.age);*/

/*function sub(a, b){
    return a - b;
}

let handler = {
    apply: function(target, ctx, args){
        console.log('handle apply');
        return Reflect.apply(...arguments);
    }
};

let proxy = new Proxy(sub, handler);
proxy(2, 1);*/

/*
let handler = {
    has: function (target, propKey) {
        console.log("handler has");
        return propKey in target;
    }
};

let exam = {name: "Tom"};
let proxy = new Proxy(exam, handler);
console.log('name' in proxy);
*/

/* let handler = {
  construct:function (target,args,newTargets) {
      console.log("handler construct");
      return Reflect.construct(target,args,newTargets);
  }
};

class Exam {
    constructor(name) {
        this.name = name;
    }
}

let ExamProxy = new Proxy(Exam,handler);
let proxyobj = new ExamProxy("Tom");
console.log(proxyobj); */

/*
let handler = {
    defineProperty: function(target, propKey, propDesc){
        console.log("handle defineProperty");
        return true;
    }
};
let target = {};
let proxy = new Proxy(target, handler);
proxy.name = "Tom";
console.log(target);
*/

/*
   yield 关键字用来暂停和继续一个生成器函数。我们可以在需要的时候控制函数的运行。
　　yield 关键字使生成器函数暂停执行，并返回跟在它后面的表达式的当前值。

   与return类似，但是可以使用next方法让生成器函数继续执行函数yield后面内容，
   直到遇到yield暂停或return返回或函数执行结束。
*/

/*function* ge() {
    yield '1';
    yield '2';
    yield '3';
    return '4';
}

let a = ge();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());*/

/*
function* countAppleScales() {
    for(let i = 0;true;i++){
        let reset = yield i;
        if(reset) {
            i = -1;
        }
    }
}

var myArr = countAppleScales();
console.log(myArr.next());
console.log(myArr.next());
console.log(myArr.next(true));
console.log(myArr.next());
console.log(myArr.next());
console.log(myArr.next(true));
*/

// next() 传参是对yield整体的传参，否则yield类似于return
// 整体传参数
function* test(x) {
    let y = 2 * (yield (x + 1));
    let z = yield (y / 3);
    console.log("x=" + x + ",y=" + y + ",z=" + z);
    return (x + y + z);
}
/*
let a = test(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());
*/

/*let b = test(5);
console.log(b.next(10));
console.log(b.next(12));
console.log(b.next(13));*/




