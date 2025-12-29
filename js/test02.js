/**
	JavaScript 中的数组是一种特殊的对象。
	它的工作原理与普通对象类似（以数字为属性名，但只能通过[] 来访问），
	但数组还有一个特殊的属性——length（长度）属性。
	这个属性的值通常比数组最大索引大 1。
 */

var a = new Array();
a[0] = "a";
a[1] = "b";
a[2] = "c";
a.length;//3

var a = ["1","2","3"];
a.length; //3

var a = ["1","2","3"];
a[100] = "fox";
a.length; //101


typeof(a[90]); // undefined

for (var i = 0; i < a.length; i++) {
    // Do something with a[i]
}

// ECMAScript 5 增加了另一个遍历数组的方法，forEach()：

["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});

//如果想在数组后面追加元素,只需要
a.push(item);


/**
  函数
 */

function add(x,y) {
	var total = x + y;
	return total;
}

////
function add() {
	var sum = 0;
	for(var i=0,j=arguments.length;i<j;i++) {
		sum += arguments[i];
	}
	return sum;
}
add(2,3,4,5); //14

// 剩余参数操作符(...variable)
function avg(...args) {
	var sum = 0;
	for (let value of args) {
		sum += value;
	}
	return sum/(args.length)
}

avg(2,3,4,5);//3.5

function avgArray(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum /arr.length;
}
avg([2,3,4,5]); // 3.5

//幸运的是 JavaScript 允许你通过任意函数对象的 apply() 方法来传递给它一个数组作为参数列表
avg.apply(null,[2,3,4,5]); //3.5

//幸运的是 javascript
function countChars(elm) {
    if (elm.nodeType == 3) {  // TEXT_NODE 文本节点
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
    }
    return count;
}

/**
 * 自定义对象
 * JavaScript 是一种基于原型的编程语言，并没有 class 语句，
 * 而是把函数用作类
 */

function makePerson(first, last) {
    return {
        first: first,
        last: last
    }
}
function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first
}
s = makePerson("Simon", "Willison");
personFullName(s); // Simon Willison
personFullNameReversed(s); // Willison, Simon


//
function makePerson(first,last) {
	return {
		first:first,
		last: last,
		fullName: function() {
			return this.first + " " + this.last;
		},
		fullNameReversed: function() {
			return this.last + ', ' + this.first;
		}
	}
}

s = makePerson("Simon","Willison");
s.fullName(); // Simon Willison
s.fullNameReversed(); // Willison, Simon

s = makePerson("Simon","Willison");
var fullName = s.fullName();
//////

//this改进已有的makePerson函数
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    }
}
var s = new Person("Simon", "Willison");

//优化方法
function Person(first,last) {
	this.first = first;
	this.last = last;
}

Person.prototype.fullName = function() {
	return this.first + ' ' + this.last;
}

Person.prototype.fullNameReversed = function() {
	return this.last + ',' + this.first;
}

//Person.prototype 是一个可以被Person的所有实例共享的对象。

//给 JavaScript 的内置函数原型（prototype）添加东西。
// 让我们给 String 添加一个方法用来返回逆序的字符串

var s = "Simon";

String.prototype.reversed = function() {
	var r = "";
	for (var i = this.length-1; i >= 0; i--) {
		r += this[i];
	}
	return r;
}

s.reversed();

//
function lastNameCaps() {
    return this.last.toUpperCase();
}
var s = new Person("Simon", "Willison");
lastNameCaps.call(s);
// 和以下方式等价
s.lastNameCaps = lastNameCaps;
s.lastNameCaps();

//////////////////////////////////
/**
 * 内部函数
 */
function parentFunc() {
	var a = 1;
	function nestedFunc() {
		var b = 4; //parentFunc 无法访问b
		return a + b;
	}
	return nestedFunc(); //5
}

function getCard() {
	var name = "";
	var age = "";
	var cardList = "";
}

/**
 * 闭包
 */
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// 计数器为 3

/**
 * 布尔字面量 (Boolean literals)
 */

// 不要混淆作为布尔对象的真和假与布尔类型的原始值true和false。
// 布尔对象是原始布尔数据类型的一个包装器。


/**
 * 整数(Integers)
 */
// 严格模式下，八进制整数字面量必须以0o或0O开头，而不能以0开头。


/**
 * 浮点数字面量 (Floating-point literals)
 */

// [(+|-)][digits][.digits][(E|e)[(+|-)]digits]


/**
 * 对象字面量 (Object literals)
 */
/*
	对象属性名字可以是任意字符串，包括空串。
	如果对象属性名字不是合法的javascript标识符，
	它必须用""包裹。属性的名字不合法，那么便不能用.访问属性值，
	而是通过类数组标记("[]")访问和赋值。
*/
var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
// console.log(unusualPropertyNames."");   // 语法错误: Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
// console.log(unusualPropertyNames.!);    // 语法错误: Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!

/**
 * 增强的对象字面量 (Enhanced Object literals)
 */
// 对象字面值 扩展支持在创建时设置原型
var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};

/**
 * RegExp 字面值
 */
var re = /ab+c/;

/**
 * 字符串字面量 (String literals)
 */
/////////////////////////////////
//下面这些值将被计算出 false (also known as Falsy values):
/*  false
	undefined
	null
	0
	NaN
	空字符串（""）
	。。。。。。。。。。。。
	当传递给条件语句所有其他的值，包括所有对象会被计算为真 。
*/

//请不要混淆原始的布尔值true和false 与 Boolean对象的真和假。例如：
/*
	var b = new Boolean(false);
	if (b) //结果视为真
	if (b == true) // 结果视为假
*/

try {

} catch (e) {
	//TODO handle the exception

} finally {

}

var square = function(number) {
	return number * number;
};

var x = square(4);

function map(f,a) {
	var result = [];//创建一个数组
	var i; //声明一个值，用来循环
	for (var i = 0; i < a.length; i++) {
		result[i] = f(a[i]);
	}
	return result;
}

var f = function(x) {
	return x*x*x;
}

var numbers = [0,1,2,5,10];
var cube = map(f,numbers);
console.log(cube);



// 调用函数
console.log(square(5));

// 递归
function factorial() {
	if ((n == 0) || (n == 1)) {
		return 1;
	} else {
		return (n * factorial(n - 1));
	}
}

//apply
// Infinity 属性用于存放表示正无穷大的数值。
var max = +Infinity;
var min = -Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min)
    min = numbers[i];
}

function minOfArray(arr) {
  var min = -Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
console.log(min);

// 使用apply来链接构造器
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
// 使用闭包
Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() {
    fConstructor.apply(this, aArgs);
  };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};

// 使用Function构造器
Function.prototype.construct = function (aArgs) {
  var fNewConstr = new Function("");
  fNewConstr.prototype = this.prototype;
  var oNew = new fNewConstr();
  this.apply(oNew, aArgs);
  return oNew;
};


//////////////////////////////////// 基类////////////////////////
function Site() {
  this.name = 'Site';
  this.domain = 'domain';
}

Site.prototype.create = function(name, domain) {
  this.name = name;
  this.domain = domain;
};

// 子类
function Itbilu() {
  Site.call(this); //调用基类的构造函数
}

// 继承父类
Itbilu.prototype = Object.create(Site.prototype);

// 创建类实例
var itbilu = new Itbilu();

itbilu instanceof Site;  // true
tbilu instanceof Itbilu;  // true

itbilu.create('IT笔录', 'itbilu.com');
itbilu.name;    // 'IT笔录'
itbilu.domain;  // 'itbilu.com'
////////////////////////////////////////////////////////////

function MyConstructor (arguments) {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = new MyConstructor(myArray); //Fix MyConstructor.construct is not a function

console.log(myInstance.property1);                // logs "Hello world!"
console.log(myInstance instanceof MyConstructor); // logs "true"
console.log(myInstance.constructor);              // logs "MyConstructor"

// 这个非native的Function.construct方法无法和一些native构造器（例如Date）一起使用。
// 在这种情况下你必须使用Function.bind方法
// (例如，想象有如下一个数组要用在Date构造器中： [2012, 11, 4]；
// 这时你需要这样写：
// new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()
// – -无论如何这不是最好的实现方式并且也许不该用在任何生产环境中).

var foo = function bar() {
	// 以下的语句是等价的：

	// 1 bar();
	// 2 arguments.callee();
	// 3 foo();
}

function walkTree(node) {
  if (node == null) {
	   return;
  }
  // do something with node
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}

//嵌套函数和闭包
function addSquares(a,b) {
	function square(x) {
		return x*x;
	}
	return square(a) + square(b);
}

function outside(x) {
	function inside(y) {
		return x+y;
	}
	return inside;
}

var result = outside(3)(5); // return 8

// 保存变量
/**
 * 注意到上例中 inside 被返回时 x 是怎么被保留下来的。
 * 一个闭包必须保存它可见作用域中所有参数和变量。
 * 因为每一次调用传入的参数都可能不同，
 * 每一次对外部函数的调用实际上重新创建了一遍这个闭包。
 * 只有当返回的 inside 没有再被引用时，内存才会被释放。
 */

// 多层嵌套函数
function A(x) {
	function B(y) {
		function C(z) {
			console.log(x+y+z);
		}
		C(3);
	}
	B(2);
}
A(1);  // logs 6 (1 + 2 + 3)

// 命名冲突
// 作用域链
function outside() {
  var x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

// 闭包
/**
 * JavaScript 允许函数嵌套，
 * 并且内部函数可以访问定义在外部函数中的所有变量和函数，
 * 以及外部函数能访问的所有变量和函数。
 * 但是，外部函数却不能够访问定义在内部函数中的变量和函数。
 * 这给内部函数的变量提供了一定的安全性。
 */

var pet = function(name) {
	var getName = function() {
		return name;
	}
	return getName;
}
var myPet = pet("Vivie");
console.log(myPet());

/*
	实际上可能会比上面的代码复杂的多。
	在下面这种情形中，
	返回了一个包含可以操作外部函数的内部变量方法的对象。

*/
var createPet = function(name) {
	var sex;

	return {
		setName:function(newName) {
			name = newName;
		},
		getName:function() {
			return name;
		},
		getSex:function() {
			return sex;
		},
		setSex:function(newSex) {
			if(typeof newSex == "string"
				&& (newSex.toLowerCase()=="male"||newSex.toLowerCase() == "female")) {
				sex = newSex;
			}
		}
	}
}

var pet = createPet("Vivie");
pet.getName();

pet.setName("Oliver");
pet.setSex("male");

pet.getSex();
pet.getName();

////
var getCode = (function(){
	var secureCode = "0]Eal(eh&2";
	return function() {
		return secureCode;
	};
})();

getCode();

/**
 *
 */
// 使用 arguments 对象
function myContact(separator) {
	var result = '';// 把值初始化成一个字符串，这样就可以用来保存字符串了！！
	var i;
	for (i = 1; i < arguments.length; i++) {
		result += arguments[i] + separator;
	}
	return result;
}
myContact(",","red","orange","blue");

// 函数参数
function multiply(a,b) {
	b = (typeof b !== 'undefined') ? b :1;
	return a*b;
}
multiply(5); //5

//可以使用默认参数
function multiply(a, b = 1) {
  return a*b;
}
multiply(5); // 5

//剩余参数
function multiply(multiplier,...theArgs) {
	return theArgs.map(x => multiplier * x);
}
var arr = multiply(2,1,2,3);
console.log(arr); //[2,4,6]

// 箭头函数
// 有两个因素会影响引入箭头函数：更简洁的函数和 this。
var a = [
	"Hydrogen",
	"Helium",
	"Lithium",
	"Beryllium"
];

var a2 = a.map(function(s){
	return s.length;
});

console.log(a2); // logs [ 8, 6, 7, 9 ]

var a3 = a.map( s => s.length );

console.log(a3); // logs [ 8, 6, 7, 9 ]

// this的词法
function Person() {

	var self = this;

	self.age = 0;

	setInterval(function growUp() {
		self.age++;
	},1000);

}

function Person() {
	this.age = 0;

	setInterval(() => {
		this.age++;
	},1000);
}

var p = new Person();




























