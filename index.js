// var age = 20;
// console.time("this is the time")
// console.log("Hello World")
// console.log(297298)
// console.log('1'+1)
// console.log(true)
// console.log([2,3,2,1,21,2,2,3,34,4,4,56,6,6,2542])
// console.log({hello: 'Hello World', marks:12})
// console.table({hello: 'Hello World', marks:12})
// console.timeEnd("this is the time")
// console.assert(age>10,'This age is issue.')
// console.error("This is a Error")

// // Variable Types in JS

// // 1. Var
// var a = 10;
// console.log(a);
// var a = 'Piyush';
// console.log(a);
// var a = 'i';
// console.log(a);
// var a = 10+2193;
// console.log(a);
// var a = "This is a String."
// console.log(a);

// // 2. Let
// let b = 10;
// b = 'soksjlk'
// console.log(b);
// let ab = 'This is a String in let'
// // let b = 'This is a String in let'
// // This is not possible in case of the let variable and this is will give us a error. If we try to do this when using a let variable.
// console.log(ab);
// let abc = true;
// console.log(abc);
// let abcd = [19,2,2,1,3,34,4,45,2,1];
// abcd.push(2929);
// console.log(abcd);
// let abcde = "This is a String";
// console.log(abcde);
// let abcdef = {string: 'This is a String in let', integer: 10}
// console.log(abcdef);

// // 3. Const
// const int = 20;
// console.log(int)
// const c = "This is a Constant"
// console.log(c);

// //Data Types in JS.

// //1. Primitive Data Types - They get Stored into Stack Memory.

// var string = "This is a String.";
// console.log(string);
// console.log("Data Type is - " + typeof(string));

// var number = 20;
// console.log(number);
// console.log("Data Type is - " + typeof(number));

// var boolean = true;
// console.log(boolean);
// console.log("Data Type is - " + typeof(boolean));

// var Null = null
// console.log(Null);
// console.log("Data Type is - " + typeof(Null));

// var undef = undefined
// console.log(undef);
// console.log("Data Type is - " + typeof(undef));


// //2. Reference Data Types - They get Stored into Heap Memory.

// // Arrays
// let myArr = [2,2,3,3,4,4,,3,'true', "this is a String", true]
// console.log(myArr);

// // Objects 
// let stmarks = {
//     Rohan: 23,
//     a: 20,
//     b:48,
//     c:"This is a String inside a Object",
//     d: {
//         string : "this is a nested Object inside a Object.",
//     }
// }
// console.log(stmarks);
// console.log(stmarks.d.string);

// //Function
// function myFunc(a){
//     console.log('Value of a is ' + a);
// }
// myFunc(10)

// // Date
// let mydate = new Date();
// console.log(mydate);


// Data Conversion and Coercion
// We can use these convertors on kind of data type be it array or boolean or date but not on objects.

let num = 20;
num = String(num)
console.log(num, typeof num);

let bool = true;
bool = String(bool)
console.log(bool, typeof bool);

let stringNum = '20';
stringNum = Number(stringNum)
console.log(stringNum, typeof stringNum);

let stringBool = true;
stringBool = Number(stringBool)
console.log(stringBool, typeof stringBool);

// On Array if we try to convert it, it will convert the whole array into a String.
let myArr = [12,34,45,12,23,2,34,325,23,23];
myArr = String(myArr)
console.log(myArr, typeof myArr);

let string = 'fhsfkf  rbf'; //For any other type other than a number it will show NaN on conversion if Converted. NaN means Not a number.
string = Number(string)
console.log(string, typeof string);

// parseInt and parseFloat and toFixed() function

let parseNum = 29.4004;
parseNum = parseInt(parseNum) // This will convert it into a Int without any after decimal points digits.
console.log(parseNum);


let parsefNum = 29.4004;
parsefNum = parseFloat(parsefNum) // This will convert it into a Float with all the after decimal points digits.
console.log(parsefNum);


let parsefNumrange = 29.439303903004;
parsefNumrange = parseFloat(parsefNumrange) // This will convert it into a Float with a range of after decimal points digits.
console.log(parsefNumrange.toFixed(8));