// class User {
//   constructor(name) {
//     this.name = name;
//   }

// sayHi() {
//   console.log(`Hello,${this.name}!`);
//   }
// }
// let user = new User('John');
// user.sayHi()


// class User {
//   constructor(_name) {
//     this.name = _name
//   }
//     sayHi(){
//     console.log(`hello ${this.name}`)
//      }
//     }

// let user = new User('Ham')
// user.sayHi()


// let user2 = new User('Thanchol')
// user2.sayHi()


// class User {
//   login() {
//     console.log('user login')
//   }
// }

// let user = new User()
// user.login()


// class Admin extends User {
//   updatePrice() {
//     console.log('admin update price');
//   }
// }

// let ham = new Admin()
// ham.updatePrice()


// class User {
//   login() {
//     console.log('user login');
    
//   }
// }

// class Admin extends User {
//   login() {
//     console.log('admin login');
//   }
// }

// const admin = new Admin();
// admin.login();


// class User {
//   login() {
//     console.log('user login');
//   }
// }
// class Admin extends User {
//   constructor() { }
// }
// const admin = new Admin(); // Error



// class User {
//   login() {
//     console.log('user login');
//   }
// }
// class Admin extends User {
//   constructor() { super(); }
// }
// const admin = new Admin(); // No Error


////////////////////////////lab01////////////////////

// class Calculator {
//   constructor(_init = 0) {
//     this.value = _init
//   }
//   add(num) {
//     this.value += num
//     return this.value
//   }
//   sub(num) {
//     this.value -= num
//     return this.value
//   }
//   multi(num) {
//     this.value *= num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }

//   show(){
//     console.log(`Value = ${this.value}`)
//   }

// }

// let result = new Calculator(10)
// result.show()
// // console.log(result.show())
// console.log(result.add(50))
// console.log(result.sub(50))
// console.log(result.multi(50))
// console.log(result.divide(50))



//////////////////////lab02/////////////////

// class Sale {
//   constructor(_name,_amount,_price){
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }
//    calPrice() {
//      return this.amount * this.price
//    }
// }

// class Beverage extends Sale {
//   constructor(_name,_amount,_price){
//     super(_name,_amount,_price)
//   }
// }

// let result = new Beverage('Pepsi',5,20)
// console.log(result.calPrice())


// let arr = [1,2,3,4,5]
// let obj = {
//   name:'Ham'
// }

// let gdfgs = [22,44,55,66]

// // console.log(arr)
// // console.log(obj)

// function isArray(input) {
//   result = Array.isArray(input)
//   return result 
// }
// console.log(isArray(gdfgs))


// Object.keys, values, entries
// ตัวอย่างการดึงค่า keys values และ entries ของ object


// let user = {
//   name: 'John',
//   age: 27
// };
// console.log(Object.keys(user)); // ["name", "age"]
// console.log(Object.values(user)); // ["John", 27]
// console.log(Object.entries(user)); // [["name", "John"], ["age", 27]]




// Object.keys, values, entries
// ตัวอย่างการใช้ loop กับ Object.keys, values, entries


// let user = { 
//   name: 'John', 
//   age: 27 
//   };


// for (let key of Object.keys(user)) {
//   console.log(key); // name then age
// }
// for (let value of Object.values(user)) {
//   console.log(value); // John then 27
// }
// for (let pair of Object.entries(user)) {
//   console.log(pair); // ['name', 'John'] then ['age', 27]
// }


/////////////////////////////lab01/////////
// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let key = Object.values(salaries)
// console.log(key)
// let sumSalaries = key.reduce((prev,curr) => {
//   return prev += curr
// },)

// console.log(sumSalaries)   


///////////////////////////lab02  //////********ต้องมาทำต่อ */
// // Lab 2
// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

// function checkEmptyObj(obj) {
//   
//   if (typeof obj !== 'object' || obj === null) {
//     return false;
//   }

//   
//   return Object.keys(obj).length === 0;
// }


// console.log(checkEmptyObj({})); // true
// console.log(checkEmptyObj({ key: 'value' })); // false
// console.log(checkEmptyObj(null)); // false


/////////////////////////
// Rest parameters ...
// ตัวอย่างการประกาศฟังก์ชันโดยใช้ Rest parameter ...


// let func = (...rest) => {
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
// }
// func(1, 'Hello', 'Codecamp', 4, 5, 6, 7, 8, 9)


// function sum(...args) { // args is the name for the array
//   let result = 0;
//   for (let arg of args) result += arg;
//   return result;
// }
// console.log(sum(1)); // 1
// console.log(sum(1, 2)); // 3
// console.log(sum(11, 22, 33)); 
// console.log(sum(111, 222, 333)); 
// console.log(sum(157, 2785, 372)); 


//////////////////////////////////////////////////////////////
// Rest parameters ...
// สามารถประกาศ parameter แบบปกติร่วมกับ Rest parameter … ได้


// function showName(firstName, lastName, ...titles) {
//   console.log(firstName + ' ' + lastName); // Julius Caesar
//   // the rest go into titles array
//   // i.e. titles = ["Consul", "Imperator"]
//   console.log(titles[0]); // Consul
//   console.log(titles[1]); // Imperator
//   console.log(titles.length); // 2
// }
// showName('Julius', 'Caesar', 'Consul', 'Imperator');

//////////////////////////////////////////////////

// Spread syntax
// The spread operator(…) allows us to expand an iterable
//  like array into its individual elements.


// let arr = [3, 5, 1];
// console.log(Math.max(arr)); // NaN

// console.log(Math.max(arr[0], arr[1], arr[2]));

// console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

//////////////////////////////////////////////////////

// Spread syntax
// ตัวอย่างการใช้ spread operator(…) กับ String


// let str = 'Hello';
// console.log([...str]); // H, e, l, l, o


/////////////////////////////////////////////////////////

// Copy an array / object
// spread operator(…) ทำให้ copy array ได้ง่ายขึ้น


// let arr = [1, 2, 3];
// // spread the array into a list of parameters 
// // then put the result into a new array
// let arrCopy = [...arr];
// // are the arrays equal?
// console.log(arrCopy)
// console.log(arr === arrCopy); // false (not same reference)



/////////////////////////////////////////////////////

////////////////////////////////lab03

// Lab 3
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด 
// และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// let mergeObj = (...obj) => {
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'Thanchol',
//   lname: 'Charoenrang'
// }
// let obj2 = {
//   nickName: 'MooHam'
// }
// let result = mergeObj(obj1, obj2)
// console.log('----------- Lab 3 ------------')
// console.log(result)


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////







///////////////////////////////////////////lab04//////////
// Lab 4
// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน 
// nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let num3 = [5, ...nums1, -6 , -1 ,...nums2]
//     console.log(num3)

// let sum = num3.reduce((prev,curr)=> {
//    return prev += curr

// },0)

// console.log(sum)


//////////////////////////////////////////////////lab05///


// // Lab 5
// // จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// // แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 
// // โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// let editArr = () => {
//  let newArr= [...arr]
//  console.log(newArr)
// //  if(newArr.length > 3) {

// //  }
//  newArr[3] = newArr[3] ** 2
//  return newArr
// }
// let arr = [2,3,4,5,6]
// let result = editArr(arr)
// console.log(result)

////////////////////////lab06

// Lab 6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ 
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// let goodperson = (fname ,lname, ...hobbies) => {
//   console.log(hobbies)
//   return [fname,lname,...hobbies]
// }

// let result = goodperson('Thanchol','Charoenrang','rifle','guns')
// console.log(result)


///////////////////////////lab07

// Lab 7
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array 
// และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array 
// และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง


// doubleAndReturnArgs([1, 2, 3], 4, 4);
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// // expexted result: [2, 20, 8]

// let doubleArr = (...arr) => {
//   console.log(...arr)
//   console.log([...arr])

//   return arr.concat(...arr)
// }

// let result = doubleArr ([1,2,3],4,4)
// console.log(result)


//////////////////////////////////////lab09////

// Lab 9
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array 
// และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// function cloneArray(array) {
//   return [...array];
// }

// const originalArray = [1, 2, 3, 4];
// const clonedArray = cloneArray(originalArray);

// console.log(clonedArray); // [1, 2, 3, 4]
// console.log(originalArray === clonedArray);


/////////////////////////////////////////lab10///
// Lab 10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object 
// และ return ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// function cloneObject(obj) {
//   return { ...obj };
// }

// const originalObject = { a: 1, b: 2, c: 3 };
// const clonedObject = cloneObject(originalObject);

// console.log(clonedObject); // { a: 1, b: 2, c: 3 }
// console.log(originalObject === clonedObject); 




///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////////////////////////
// Array destructuring
// ตัวอย่าง Array destructuring


// let arr = ['John', 'Doe'];



// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);

/////////////////////////////////////////////////  ยังไม่จบ
// Array destructuring
// Unwanted elements of the array can also be thrown away via an extra comma

// let arr = ['John', 'Doe', 27, 'Male', 'Thailand'];

// let [fname,sname,ages,gender,country] = arr 


// console.log(fName); // John
// console.log(ages); // 27
// console.log(country); // Thailand

// console.log(arr)

////////////////////////////////////////////////////////////
// Array destructuring
// ใช้ Rest parameter กับ Array destructuring ได้
// The value of rest is the array of the remaining array elements.

// let [name1, name2, ...rest] = ['John', 'Erik','Ham','Thanchol', 'Michael', 'Joshua'];


// // rest is array of items, starting from the 3rd one
// console.log(rest[0]); // Michael
// console.log(rest[1]); // Joshua
// console.log(rest.length); // 2


///////////////////////////////////////////////////////////////////
// Array destructuring
// กำหนด default value กับ Array destructuring

// let arr = ['John','Doe']
// let [name = 'Guest', surname = 'Anonymous'] = ['John'];
// console.log(name); // John (from array)
// console.log(surname); // Anonymous (default used)


////////////////////////////////////////////////////////////////
// Object destructuring
// Object สามารถ destructuring ได้เช่นเดียวกับ Array


// let user = {
//   username: 'john',
//   // email: 'john@gmail.com',
//   password: '123456'
// };
// let { username, email = 'john@gmail.com', password } = user;

// console.log(username); // john
// console.log(email); // john@gmail.com
// console.log(password); // 123456

/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Object destructuring
// สามารถกำหนดชื่อตัวแปรโดยที่ไม่เหมือนชื่อ key ใน Object ได้

// let user = {
//   username: 'john',
//   email: 'john@gmail.com',
//   password: '123456'
// };
// let { username: u, email: e, password: p } = user;
// console.log(u); // john
// console.log(e); // john@gmail.com
// console.log(p); // 123456

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Nested destructuring
// สามารถใช้ destructuring กับ Array หรือ Object ที่มีโครงสร้างซับซ้อนได้

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ['Cake', 'Donut'],
//   extra: true
// };

///////////////////////////////////////////

// let {
//   size: {
//     width, // 100
//     height // 200
//   },
//   items: [item1, item2], // Cake then Donut
//   extra // true
// } = options;



//////////////////////////////////////lab11
// Lab 11
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * Maya เพราะ มายา คือ ข้อมูลของ first 
// console.log(second); // ** Marisa because it is a  base data of 'second'
// console.log(third); // *** Chi because it is a base date of 'third'


///////////////////////////////////////lab12
// Lab 12
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * Raindrops on roes เพราะ เป็นการถอดโครงสร้างของตัวแปร
// console.log(whiskers); // ** whiskers on kittens เพราะ เป็นการถอดโครงสร้างของตัวแปร
// console.log(aFewOfMyFavoriteThings); // *** bright copper kettles, warm woolen mittens เพราะเป็นการถอดโครงสร้างของตัวแปร


///////////////////////////////////////lab13

// Lab 13
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * 10 ,30 ,20 เพราะว่า มันคือการสลับค่า number1 รับค่า number2 และ number 2 รับค่า number1 


///////////////////////////////////////////////lab14
// Lab 14
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8 เพราะว่า numPLanet เป็นการถอดโครงสร้างจาก numPlanet:8
// console.log(yearNeptuneDiscovered); // ** 1846 เพราะว่า yearNeptuneDiscovered เป็นการถอดโครงสร้างจากตัวแปร


//////////////////////////////////////////////lab15
// Lab 15
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *yearMarsDiscovered:1659 , yearNeptuneDiscovered:1846

// ///////////เพราะว่า คำตอบทั้งสองเป็นการถอดข้อมูลหรือเป็นข้อมูลของ platnetFacts

////////////////////////////////lab16

// // Lab 16
// // ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // **Your name is Alejandro and you like purple
// console.log(({ firstName: 'Melissa' })); // ** first name: Melissa
// console.log(getUserData({})); // ***  Your name is undefined and you like green 

// /////1. First name is Alejandro and favoritecolor is purple.
// ////2. Because set name only "Melissa" and default is equal to 'green'.
// /////3.  There is no 'value' in the blanket.


///////////////////////////////lab17

// Lab 17
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

// let guest = 'Jane';
// let admin = 'Pete';

// [guest , admin] = [admin , guest]

// console.log(guest)
// console.log(admin)

////////////////////////////////lab18

// Lab 18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName 
// และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ - นามสกุล 
// ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)

// function checkAge(user) {
  
//   const { firstName, lastName, age } = user;

  
//   if (age > 18) {
//     console.log(`Hello, ${firstName} ${lastName}`);
//   } else {
//     console.log('You are not allowed');
//   }
// }


// const user1 = {
//   firstName: 'Ham',
//   lastName: 'MooHam',
//   age: 25
// };

// const user2 = {
//   firstName: 'Zulu',
//   lastName: 'Smith',
//   age: 17
// };
// (checkAge(user1))
// // (checkAge(user2))


/////////////////////////////lab19
// Lab 19
// จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
//   name: 'John',
//   years: 27
// };

// const { name, years: age, isAdmin = false } = user;

// console.log(name);   
// console.log(age);    
// console.log(isAdmin); 

//////////////////////////////////lab21
// Lab 21
// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ


// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [A, [B, [[[C , D], E], F]]] = arr 

// console.log(A,B,C,D,F)


///////////////////////////////////////lab22

// Lab 22
// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };

// const { prop: a, prop2: b} = obj

// console.log(a,b)


///////////////////////////////////lab23

// Lab23
// a และ b มีค่าเท่าไร

// let a, b;
// { a, b } = { a: 1, b: 2 };

// console.log(a)
// console.log(b)  

/////The answer is Syntax Error

///////////////////////////////////lab24


// a และ b มีค่าเท่าไร

// const [, , , a, b] = [1, 2, 3];

// console.log(a,b)
// //////////////The answer is 'undefined and undefined'.


//////////////////////////////////////lab25

// // Lab 25
// // ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100

// const q = { prop: 5, prop2: [10, 100] };

// const {prop :x ,prop2 : [,y]} =q

// console.log(x,y)

/////////////////////////////////////lab26

// Lab 26
// ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// const {
//   prop: X ,
//   prop2: {
//     prop2: {
//       nested: [,Y,]
//     }
//   }
// } = q

// console.log(X,Y)

//////////////////////////////////////////////////lab27

// // Lab 27
// // ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
// // ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา


// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];


// for(const key of names) {
//   const{firstName , lastName} = key
//   fullname =`${firstName} ${lastName}`
//   console.log(fullname)
// }


/////////////////////////////////////////lab28

// // // Lab 28
// ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];



// for(const key of users) {
//   const{user , age = ' Unknown'} = key 
//   console.log(user,age)
// }
