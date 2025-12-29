/*
 当谈到继承时，JavaScript 只有一种结构：对象。
 每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）
 指向它的构造函数的原型对象（prototype ）。
 该原型对象也有一个自己的原型对象( __proto__ ) ，
 层层向上直到一个对象的原型对象为 null。
 根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

 几乎所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。
 */


// let 语句声明一个块级作用域的本地变量，并且可选的将其初始化为一个值。
let a;
let name = "Simon";

// const 允许声明一个不可变的常量。这个常量在定义域内总是可见的。
const Pi = 3.14; // 设置 Pi 的值
//Pi = 1; // 将会抛出一个错误因为你改变了一个常量的值。

// var 是最常见的声明变量的关键字。它没有其他两个关键字的种种限制。
// 这是因为它是传统上在 JavaScript 声明变量的唯一方法。
// 使用 var 声明的变量在它所声明的整个函数都是可见的。
var a;
var name = "simaon";

// for in
for (let var1 in var2) {

}

// for of
for (let s of sequence) {

}


switch (action){

	case value:
		break;

	default:
		break;

}

var obj = {
	name:"carrot",
	details: {

	},

}

function Person(name,age) {
	this.name = name;
	this.age = age;
}

var you = new Person("YOU",24);

// /////////////////////////////////////
// {[phoneType]: 12345};//用来代替

var userPhone = {};
userPhone[phoneType] = 12345;


/*
	对象：object -> _proto_ ->prototype -> _proto_
	[[prototype]] func prototype属性
	Object.prototype

*/

let f = function () {
	this.a = 1;
	this.b = 2;
}

let o = new f();

// 在f函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;

//继承方法
var o = {
	a:2,
	m:function() {
		return this.a + 1;
	}
};
console.log(o.m());//3
// 当调用 o.m 时，'this' 指向了 o.

var p = Object.create(o);
// p是一个继承自 o 的对象
p.a = 4; // // 创建 p 的自身属性 'a'
console.log(p.m());// 5
// 调用 p.m 时，'this' 指向了 p
// 又因为 p 继承了 o 的 m 函数
// 所以，此时的 'this.a' 即 p.a，就是 p 的自身属性 'a'

//在javascript中使用原型

// 使用不同的方法来创建对象和生成原型链
var o = {a: 1};

// o 这个对象继承了 Object.prototype 上面的所有属性
// o 自身没有名为 hasOwnProperty 的属性
// hasOwnProperty 是 Object.prototype 的属性
// 因此 o 继承了 Object.prototype 的 hasOwnProperty
// Object.prototype 的原型为 null
// 原型链如下:
// o ---> Object.prototype ---> null

var a = ["yo","whaup","?"];
// 数组都继承于 Array.prototype
// (Array.prototype 中包含 indexOf, forEach 等方法)
// 原型链如下:
//  a ---> Array.prototype ---> Object.prototype ---> null

function f() {
	return 2;
}

// 函数都继承于 Function.prototype
// (Function.prototype 中包含 call, bind等方法)
// 原型链如下:
// f ---> Function.prototype ---> Object.prototype ---> null



//使用构造器创建的对象
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();

// g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
// 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。


// 使用 Object.create 创建的对象
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype

// 使用class关键字创建的对象
// 关键字包括 class, constructor，static，extends 和 super。
class Polygon {
	constructor(height,width) {
	    this.height = height;
		this.width = width;
	}
}

class Square extends Polygon {
	constructor(sideLength) {
		super(sideLength, sideLength);
	}

	get area() {
		return this.height * this.width;
	}

	set sideLength(newLength) {
		this.height = newLength;
		this.width = newLength;
	}
}

var square = new Square(2);


//性能
console.log(g.hasOwnProperty('vertices'));
// hasOwnProperty 是 JavaScript 中唯一一个处理属性并且不会遍历原型链的方法。


// 错误实践：扩展原生对象的原型

/*
	经常使用的一个错误实践是扩展 Object.prototype 或其他内置原型。

	这种技术被称为猴子补丁并且会破坏封装。尽管一些流行的框架（如 Prototype.js）在使用该技术，
	但仍然没有足够好的理由使用附加的非标准方法来混入内置原型。

	唯一理由是支持 JavaScript 引擎的新特性，如 Array.forEach。

*/

// 总结：4 个用于拓展原型链的方法

function foo() {}

foo.prototype = {
	foo_prop:"foo val"
};

function bar() {}

var proto = Object.create(
	foo.prototype,
	{
		bar_prop:{
			value:"bar val"
		}
	}
);

bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);

//prototype 和 Object.getPrototypeOf

/*
	对于从 Java 或 C++ 转过来的开发人员来说，
	JavaScript 会有点让人困惑，因为它完全是动态的，
	都是运行时，而且不存在类（class）。
	所有的都是实例（对象）。即使我们模拟出的 “类”，
	也只是一个函数对象
*/

function A() {

}

var a1 = new A();
var a2 = new A();

// a1.[[Prototype]] = A.prototype;
Object.getPrototypeOf(a1);

var o = new Foo();

var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);

///////////////////////////////
function B(a,b) {
	A.call(this,a);
	this.varB = b;
}

B.prototype = Object.create(A.prototype,{

	varB: {
		value: null,
		enumerable: true,
		configurable: true,
		writable: true
	},

	doSomething : {
		value: function() {
			A.prototype.doSomething.apply(this,arguments);
		},
		enumerable: true,
		configurable: true,
		writable: true
	},

});





