"use strict";
//混合类型
/*interface Counter {
    (start: number) :string;
    interval:number;
    reset():void;
}

function getCounter():Counter {
    let s = <Counter>function (start: number) :string{
        return start + "PPP";
    };
    s.interval = 123;
    s.reset = function () {
        console.log("reset");
    };
    return s;
}
let c = getCounter();
console.log(c(10));
console.log(c.interval);
c.reset();*/
// 泛型函数
/*function printer<T>(arr:T[]):void {
    for (let i = 0; i <arr.length; i++) {
        console.log(arr[i]);
    }
}

printer<string>(['a','s','d']);
printer([1,2,3,4]);*/
//  泛型类
/*class arrayList<T> {
    name: T;
    list: T[] = [];
    add(val: T): void {
        this.list.push(val);
    }
}
var arr = new arrayList<number>();
arr.add(1);
arr.add(2);
console.log(arr.list);*/
// 泛型接口
/*interface Iadd<T> {
    (x: T, y: T): T;
}

var add: Iadd<number> = function (x: number, y: number): number {
    return x+y;
};

console.log(add(10,18));*/
// 泛型约束
/*interface ILength {
    length:number;
}

function getLength<T extends ILength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

getLength('456221');*/
// 多个参数之间可以相互约束
// 使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。
/*function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = { a: "1", b: "2", c: "3", d: "4" };
copyFields(x, { b: "10", d: "20" });

console.log(x);*/
// 标记模板
var x = 5;
console.log(x);
