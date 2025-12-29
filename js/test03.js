/**
 * 表达式与运算符
 */

// 赋值运算符

// 解构
/* 对于更复杂的赋值，
解构赋值语法是一个能从数组或对象对应的数组结构
或对象字面量里提取数据的 Javascript 表达式。 */
var foo = ["one", "two", "three"];
// 使用解构
var [one1, two2, three3] = foo; //one1:one, two2:two, three3:three


// 比较运算符( === 和 !== )

var var1 = 3;
var var2 = 4;

var1 === 3;   //true
var1 == "3";  //true
var1 !== "3"; //true

//算术运算符

//字符串运算符

// 条件（三元）运算符
// 条件 ？ 值1 ： 值2

// 一元操作符

x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h

delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)

// 删除数组元素

/**
 * 删除数组中的元素时，数组的长度是不变的，
 * 例如删除a[3], a[4]，a[4]和a[3] 仍然存在变成了undefined。
 */

// void
/*
如下创建了一个超链接文本，当用户单击该文本时，不会有任何效果。
<a href="javascript:void(0)">Click here to do nothing</a>

下面的代码创建了一个超链接，当用户单击它时，提交一个表单。
<a href="javascript:void(document.form.submit())">
    Click here to submit</a>
*/

// 关系操作符
// in操作符，如果所指定的属性确实存在于所指定的对象中，
// 则会返回true

var trees = ["redwood","bay","cedar", "oak", "maple"];

// instanceof
// 表达式是一组代码的集合，它返回一个值。

// 分组操作符

// 数值推导

// 左值表达式(左值可以作为赋值的目标)

var objectName = new objectType([params1,params2,...paramsN]);

// super
// super([arguments]);

// 扩展语句
var parts = ['shoulder','knees'];
var lyrics = ['head',...parts,'and','toes'];
console.log(lyrics);
