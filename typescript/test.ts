/*const hello : string = "Hello World!666";
console.log(hello);*/

// 定义类和对象
/*
class Site {
    name(): void {
        console.log("rubbon");
    }
}

var obj1 = new Site();
obj1.name();
*/

// 字符串
/*let name1:string = "123";
let years:string = "5";
let words:string = `hello, this ${name1} ... ${years}`;
console.log(words);*/

// 数组
// let arr:number[] = [1,2];

// 元组类型用来表示已知元素数量和类型的数组，
// 各元素的类型不必相同，对应位置的类型需要相同。
/*let x:[string,number];
x = ["Rubb",2];
console.log(x[0]);*/

// 枚举 用于定义数值集合
/*enum Color {
    Red,Green,Blue
}

let c:Color = Color.Green;
console.log(c);*/

// Any 类型
/*let x:any = 1;
x = "I";
x = false;
const  s = x.toFixed();
console.log(s);
let arrayList: any[] = [1,false,"fine"];
arrayList[0] = 100;
*/

// Null 和 Undefined
// 启用 --strictNullChecks
/*let x: number;
x = 1; // 运行正确
x = undefined; // 运行错误
x = null; // 运行错误*/

// 启用 --strictNullChecks
/*let x1: number | null | undefined;
x1 = 1; // 运行正确
x1 = undefined;    // 运行正确
x1 = null;    // 运行正确*/
// never

// switch
/*var grade:string = "A";
switch (grade) {
    case "A": {
        console.log("A");
        break;
    }
    case "B" : {
        console.log("B");
        break;
    }
    default : {
        console.log("00000");
        break;
    }
}*/

// 循环
/*let list:number[] = [4,5,6,7,8];
list.forEach((val, idx, array) => {
    console.log("val:" + val + "...idx:" + idx);
});

list.every((val, idx, array) => {
    console.log("val:" + val + "...idx:" + idx);
    return true;
    // Return false will quit the iteration
});*/

//函数
/*function greet() : string {
    return "hello";
}

function caller() {
    var msg = greet();
    console.log(msg);
}

caller();*/

/*function add(x:number,y:number):number {
    return x+y;
}

console.log(add(2,3));*/

//函数的可选参数  可选参数
/*function buildName(firstName: string, lastName?: string):string {
    if(lastName) {
        return firstName + "..." + lastName;
    } else {
        return firstName;
    }
}

let result1 = buildName("lyo"); //正确
let result1 = buildName("lyo","123"); //正确
let result1 = buildName("lyo","123"，"222"); //错误，参数多了
console.log(result1);*/

// 参数不能同时设置为可选和默认

// 函数参数设置默认值
/*function calculate_discount(price: number, rate: number = 0.5) {
    var discount = price * rate;
    console.log(discount);
}

calculate_discount(1000);
calculate_discount(1000,0.8);
*/

//剩余参数
/*function addNumbers(...nums: number[]) {
    var i;
    var sum:number = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
    }
    console.log("和为：" + sum);
}

addNumbers(1,2,3);
addNumbers(10,9,8,7,6);*/

// 匿名函数
// 自调用
/*(function () {
    console.log("hello");
})();*/

// lambda 表达式函数
/*var foo = (x:number)=>10 + x;
console.log(foo(100));

var func = (x)=> {
    if(typeof x == "number") {
        console.log(x+"is a number");
    } else if (typeof x == "string") {
        console.log(x+"is a string");
    }
};

func(12);
func("Tom");*/

//单个参数 () 是可选的：
/*var display = x => {
    console.log("output is :" + x);
};

display(55);*/

//无参数时可以设置空括号：
/*var disp = ()=> {
    console.log("Function invoked");
};
disp();*/

// 函数重载
/*  重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
    每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。*/

/*function disp(s1:string):void;
function disp(n1: number, s1: string):string ;
function disp(x:any,y?:any) : void|string {
    console.log(x);
    console.log(y);
}

disp("abc");
disp(1,"xyz");*/

// Number
/*Number.MAX_VALUE;
Number.MIN_VALUE;
Number.NaN;*/

// Array对象
/*var arr_names: number[] = new Array(4);
for (let i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var arr:number[] = [12,13];
var [x,y] = arr;
console.log(x);
console.log(y);*/

/*var j:any;
var nums:number[] = [1001,1002,1003,1004];
for (j in nums) {
    console.log(j);
}*/

/*var sites:string[] = new Array("Google","Runoob","Taobao");
function disp(arr: string[]) {
    arr.push("444");
}
disp(sites);
console.log(sites);*/

//数组的方法
/*
function isBigEnough(element, index, array) {
    console.log(element + "..." + index + "..." + array);
    return (element >= 10);
}

var passed = [12,13,14,5].every(isBigEnough);
console.log("Test Result: " + passed);
*/


// 元组中允许存储不同类型的元素，元组可以作为参数传递给函数
/*var mytuple = [10,"rubbon",false];
console.log(mytuple.length); //返回元组的大小

mytuple.push(666);
console.log(mytuple.length);
console.log(mytuple.pop());
console.log(mytuple.length);*/

// 解构元组
// 把元组元素赋值给变量
/*var a  =  [10,"Runoob"];
var [b,c] = a;
console.log(b);
console.log(c);*/

// TypeScript 联合类型

/*var val:string|number;
val = 12;
console.log("number: " + val);
val = "Runoob";
console.log("String: " + val);*/

// 联合类型数组


// TypeScript 接口
/*interface IPerson {
    firstName:string,
    lastName:string,
    sayHi: ()=>string
}

var customer:IPerson = {
  firstName:"Tom",
  lastName:"Hanks",
  sayHi: ():string => {
      return "Hi there";
  }
};

console.log("Customer 对象");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
//////////////////////////////

var employee:IPerson  = {
    firstName:"Jim",
    lastName:"Blanks",
    sayHi: ():string => {
        return "Hello!!!";
    }
};

console.log("Employee 对象");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());*/

// 联合类型和接口
/*interface RunOptions {
    program: string;
    commandline: string[] | string | (()=>string);
}

var options:RunOptions = {
    program:"Test1",
    // commandline:"Hello"
    // commandline:["Hello","World"]
    commandline: ():string => {
        return "Hello World";
    }
};

//commandline是函数
var fn:any =  options.commandline; //要用any修饰
console.log(fn());*/

// 接口和数组
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。
/*interface nameList {
    [index:number]:string
}

var list2:nameList = ["SSS","1","l"];


interface ages {
    [index:string]:number
}

var agelist:ages;*/
// agelist["John"] = 15;  // 正确

// 单继承实例
/*interface Person {
    age:number
}

interface Musician extends Person {
    instrument:string
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("年龄:  "+drummer.age);
console.log("喜欢的乐器:  "+drummer.instrument);*/

// 多继承实例
/*interface IParent1 {
    v1:number;
}

interface IParent2 {
    v2:number;
}

interface Child extends IParent1,IParent2{

}

var  Iobj:Child = {
    v1:12,
    v2:23
};
console.log("value 1:" + Iobj.v1);
console.log("value 2:" + Iobj.v2);*/

// TypeScript 类

/*class Car {
    //字段
    engine:string;
    //构造函数
    constructor(engine:string) {
        this.engine = engine;
    }
    //方法
    disp():void {
        console.log("发动机为：" + this.engine);
    }
}
// 创建一个对象
var obj  = new Car("Engine 1");
//访问字段
console.log("字段是："+obj.engine);

//访问方法
obj.disp();*/

// 类的继承
/*class Shape {
    Area:number;
    constructor(a:number) {
        this.Area = a;
    }
}

class Circle extends Shape {
    disp(): void{
        console.log("圆的面积：" + this.Area);
    }
}

var obj = new Circle(223);
obj.disp();*/

// 继承类的方法重写
/*类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。

其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。*/

/*
class PrinterClass {
    doPrint():void {
        console.log("父类的 doPrint() 方法。");
    }
}

class StringPrinter extends PrinterClass {
    doPrint(): void {
        super.doPrint(); // 调用父类的函数
        console.log("子类的doPrint()方法。")
    }
}

var obj = new StringPrinter();
obj.doPrint();
*/
//static 关键字
/*
class StaticMem {
    static num:number;

    static disp():void {
        console.log("num 值为 "+ StaticMem.num)
    }
}

StaticMem.num = 12;   // 初始化静态变量
StaticMem.disp();     // 调用静态方法
*/

// instanceof运算符
/*class Person {

}

var obj = new Person();
var isPerson = obj instanceof Person;
console.log(isPerson);*/

//访问控制修饰符
// public protected private

//类和接口
/*interface ILon {
    mytest:number
}
class Argin implements ILon{
    mytest: number;
    rebatte:number;
    constructor(mytest: number,rebatte:number) {
        this.mytest = mytest;
        this.rebatte = rebatte;
    }
}

var obj = new Argin(10,1);
console.log("利润为 : "+obj.mytest+"，抽成为 : "+obj.rebatte );*/

// TypeScript对象
// TypeScript类型模板
/*var sites = {
    site1:"Runob",
    site2:"Google",
    sayHello: function () { } // 类型模板
};
//访问
sites.sayHello = function () {
    console.log("hello");
};
console.log(sites.site1);
console.log(sites.site2);
sites.sayHello();*/
/*
var sites = {
    site1:"Runoob",
    site2:"Google"
};
var invokesites = function (obj:{site1:string,site2:string}) {
    console.log("site1:" + obj.site1);
    console.log("site2:" + obj.site2);
};
invokesites(sites);
*/

// 鸭子类型(Duck Typing)
// 鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式。
/*interface IPoint {
    x: number,
    y: number
}

function addPoints(p1: IPoint, p2: IPoint) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return {x: x, y: y};
}

var newPoint = addPoints(
    {x:2,y:4},
    {x:3,y:5}
);
console.log(newPoint);*/

// TypeScript 命名空间
/*/// <reference path = "namespaces/IShape.ts" />
/// <reference path = "namespaces/Circle.ts" />
/// <reference path = "namespaces/Triangle.ts" />
function drawAllShapes(shape:Drawing.IShape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());*/

// 嵌套命名空间
/*/// <reference path = "namespaces/Invoice.ts" />
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(800));*/

// TypeScript 模块
// TypeScript 模块的设计理念是可以更换的组织代码。

/*import shape = require("./tsmodule/IShape");
import circle = require("./tsmodule/Circle");
import triangle = require("./tsmodule/Triangle");
function drawAllShapes(shapeToDraw: shape.IShape) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());*/


/*
 tsconfig.json 的配置信息
{
    "compilerOptions": {
        "module": "amd",
        "sourceMap": true
    },
    "files": [
        "app.ts"
    ]
}
 */

//////////////////////////////////////
// !: 表示一定存在，?:表示可能不存在 这两种在语法上叫赋值断言
// 不可以申明变量的时候使用
// var a!:number;
// var a?:number;

// ?: 不可以字面量赋值时使用
// var a = { name?:"Pluto" }

/*class a {
    sad!: string;
    // 肯定断言不能赋初值
    // sad!: string = 'so sad';
    // bg = { age!: 16 };

    // 但是否定断言，就可以
    age?: number = 2;
}*/

// 在Vue中最常见的肯定断言就是prop还有store引入了，因为我们确信他们已经存在了
/*@Component
export default class MyComponent extends Vue {
    @Prop({ default : "" }) myName !: string;
    @State  mystate !: boolean;
}*/

// 在Vue中最常见的否定断言就是函数传参和类型定义
/*
interface A {
    name:string
    /!* 赋值时，age不是必选项，因此可以不使用 *!/
    age?:number
}

var a:A = {
    name:"16"
};

function getSome(some?:string) {
    /!* 通常函数我们使用 给函数参数赋初始值的形式而不是用这种形式 *!/
    return some || "";
}
*/
























