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

function reverse(str) {
  if (!str || str.length < 2 || typeof str != "string") {
    return "invalid operation";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  console.log(str.length);
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

console.log(reverse("vishnu"));


const reverse2 = (str)=> [...str].reverse().join("");

console.log(reverse2("achu"));