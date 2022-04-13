// function a() {
//   console.log(this);
//   this.newvariable="hello";
// }

// var b = function(){
//   console.log(this)
// }

// a();
// console.log(newvariable)

// b();

// var c = {
//   name: "object c",
//   log: function(){

//     var self = this
//     console.log(self)
//     self.name = "updated name"

//     function setname(newname){
//       self.name = newname;
//     }
//     setname("changed again in C ! wow")
//     console.log(self);
//   }

// }

// c.log()

// var arr = [
//   1,
//   { name: "vishnu" },
//   function greetings(name) {
//     var greeting = "hello ";
//     console.log(greeting + name);
//   },
//   "hello",
// ];

// // console.log(arr)

// arr[2](arr[1].name)

// function greet(firstname, lastname, language) {

//   language = language||"english"
//   lastname = lastname|| "please mention"

//   if (arguments.length === 0 ){
//     console.log("misssing parameters");
//     console.log("--------------------");
//   }
//   firstname=  firstname||"enter name"
//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
// }

// greet();
// greet("vishnu");
// greet("vishnu","g prasad");
// greet("vishnu","g prasad","english")

// function greet(firstname, lastname, language) {
//   language = language || "english";

//   if (language === "en") {
//     console.log("hello" + " " + firstname + " " + lastname);
//   }
//   if (language === "es") {
//     console.log("hola" + " " + firstname + " " + lastname);
//   }
// }

// function greetEnglish(firstname, lastname) {
//   greet(firstname, lastname, "en");
// }

// function greetSpanish(firstname, lastname) {
//   greet(firstname, lastname, "es");
// }

// greetEnglish("David", "Warner")
// greetSpanish("Anna", "Delvi")

// var greetings = function(name) {
//   console.log("hello " + name);
// }("vishnu")

// // console.log(greetings)

// (function (name) {

//   console.log("hello " + name);

// }("Mahesh"))

// function greet(say) {

//   return function(name){
//     console.log(say + " " + name);
//   }
// }

// greet("hello")(" Vishnu")

//...................................ARRAY................................................................

// const string = ["a","b","C","d"];

// console.log(string[2])

//push

// string.push("e")  // O(1)

// console.log(string);

// //pop
// string.pop() //O(1)

// console.log(string);

// // unshift ..... this will shift the locations/index of the array.

// string.unshift("x")  // O(n) -  hence an iteration is happening in the array
// console.log(string);

// string.splice(2, 2, 'vishnu');

// console.log(string);

//.........................IMPLEMENTING AN ARRAY........................................

// class MyArray{
//     constructor() {
//         this.length = 0;
//         this.data = {};
//     }

//     get(index){
//         return this.data[index]
//     }

//     push(item){
//         this.data[this.length] = item;
//         this.length++
//         return this.length;
//     }

//     pop(){
//         const lastItem = this.data[this.length-1]
//         delete this.data[this.length-1]
//         this.length--
//         return lastItem
//     }

//     delete(index){
//         const item = this.data[index]

//         this.shiftItem(index)

//     }

//     shiftItem(index){
//         for( let i = index; i< this.length-1; i++){
//             this.data[index] = this.data[index+1]
//         }
//         delete this.data[this.length-1];
//         this.length--;
//     }
// }

// const newArray = new MyArray();
// newArray.push("vishnu");
// newArray.push("G")
// newArray.push("Prasad")
// newArray.push("Anna")
// newArray.push("Delhvi")

// // console.log(newArray.get(0));
// // newArray.pop();
// console.log(newArray)
// newArray.delete(3)
// console.log(newArray);

//........................REVERSE A STRING...........................

// function reverseString(str){
//     if(!str || str.length < 2|| typeof str !== "string"){
//         return "invalid operation"
//     }

//     const backwards = [];
//     const totalItems = str.length-1;
//     for( let i = totalItems; i >= 0; i--){
//         backwards.push(str[i]);
//     }
//     console.log(backwards);
//     return backwards.join("")
// }

// function reverse3(str){
//     console.log(str.split('').reverse().join(''))
// }

// const reverse4 = str => str.split('').reverse().join('')

// // reverseString("my name is vishnu")
//  console.log(  reverse4("my name is vishnu"))

// function reverse(str) {
//   if (!str || str.length < 2 || typeof str != "string") {
//     return "invalid operation";
//   }

//   const backwards = [];
//   const totalItems = str.length - 1;
//   console.log(str.length);
//   for (let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   return backwards.join("");
// }

// console.log(reverse("vishnu"));

// const reverse2 = (str)=> [...str].reverse().join("");

// console.log(reverse2("achu"));

//.......................................MERGE SORT ARRAY................................

// function mergeSortArray(arr1,arr2){
//     const sortedArray = []

//     let array1Item = arr1[0];
//     let array2Item = arr2[0];
//     let i =1;
//     let j =1;
//     // console.log(array1Item,array2Item);

//     if(arr1.length === 0){
//         return arr2;
//     }

//     if(arr2.length === 0){
//         return arr1;
//     }

//     while(array1Item||array2Item){
//         console.log(array1Item,array2Item);
//         if(!array2Item||array1Item < array2Item){
//             sortedArray.push(array1Item)
//         array1Item = arr1[i]
//         i++
//         }
//         else{
//             sortedArray.push(array2Item);
//             array2Item = arr2[j];
//             j++
//         }

//     }

//     return sortedArray
// }

//    console.log(mergeSortArray([1,5,7,9],[2,3,6,8]));

//.......................HASH TABLES.................................

// let user = {
//   name: "harry",
//   age: 17,
//   magic: true,
//   scream: function () {
//     console.log("ahhhhaaa");
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user);
// user.spell = "expelliarmus"

// user.age = 18;
// console.log(user);






// ........................FIRST RECURRING CHARACTER............................................

// IF THE ARRAY IS [2,3,4,5,2,7,8,9] THE OP SHOULD BE 2
// IF THE ARRAY IS [1,2,3,5,1,5,6,2] THE O/P SHOULD BE 1






// function recurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i+1; j < input.length; j++) {
      
//     //  console.log(input[i],input[j]);
//       if ( input[i] === input[j]){
//         return input[i]
//       }
//     }
//   }
// }

// var rep = recurringCharacter([7, 8, 3, 5, 8, 9, 8]);
// console.log(rep);




//..................LEETCODE...........................


let a  = [12,3,6,1,9];
let n = a.length;
console.log(a);
console.log(a.sort(function (a,b)
{
  
  return a-b 
})
);
