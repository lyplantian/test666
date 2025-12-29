/**
 * 数字和日期
 */

// 数字(二进制 十进制 八进制 十六进制)

// 数字对象

var biggestNum = Number.MAX_VALUE;

// 返回指定小数位数的表示形式
var a=123,b=a.toFixed(2);//b="123.00"

//日期对象
var dateObjectName = new Date([paramaters]);

var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
console.log(IPOdate);

function JSClock() {
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth()+1;
  var day = time.getDate();

  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  var temp = year + "年" + month + "月" + day + "日" + " " + hour;
  temp += ((minute < 10) ? ":0" : ":") + minute;
  temp += ((second < 10) ? ":0" : ":") + second;
  return temp;
}

console.log(JSClock());


// 0x10FFFF

// 模板字符串是一种允许内嵌表达式的String字面值.
// 可以用它实现多行字符串或者字符串内插等特性.

//数组(array)也可以作为一个属性(property)分配给一个新的或者已存在的对象(object)：
var obj = {};
obj.prop = [e0,e1,e2,e3];

var obj = {
	prop:[e0,e1,e2,e3],
	age:20
};


var emp = [];
emp[0] = "a";
emp[1] = "b";
emp[2] = "c";

// 数组的遍历
var colors = ['red','green','blue'];
colors.forEach(function (color) {
  console.log(color);
});

// 数组的一些方法
var myArray = ["1","2"];
var list = myArray.join(" - ");
myArray.push("3"); // myArray is now ["1", "2", "3"]
var last = myArray.pop(); // myArray is now ["1", "2"], last = "3"

var first = myArray.shift();// // myArray is now ["2", "3"], first is "1"

myArray.unshift("4","5"); // myArray becomes ["4", "5", "1", "2", "3"]


//slice
var myArray = ["a","b","c","d","e"];
myArray = myArray.slice(1,3);

//splice
var myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");

//map(callback[,thisObject])
var a1 = ['a','b','c'];
var a2 = a1.map(function (item,index) {
  return item.toUpperCase() + "." + index;
});
console.log(a2);

//filter(callback[,thisObject])
var a1 = ['a',10,'b',20,'c',30];
var a2 = a1.filter(function (item,index) {
    return index%2===1;
});
console.log(a2);

//every(callback[,thisObject])
function isNumber(value) {
  return typeof value === 'number';
}

var a1 = [1,2,3];
console.log(a1.every(isNumber)); // logs true

var a2 = [1,'2',3];
console.log(a2.every(isNumber)); // logs false

//reduce(callback[,initialValue])
var a = [10,20,30];
var total = a.reduce(function (first, second) {
  return first + second;
},0);
console.log(total);











