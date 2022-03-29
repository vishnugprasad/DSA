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

// //push

// string.push("e")  // O(1)

// console.log(string);

// //pop
// string.pop() //O(1)

// console.log(string);

//unshift ..... this will shift the locations/index of the array. 

// string.unshift("x")  // O(n) -  hence an iteration is happening in the array
// console.log(string);


// string.splice(2, 2, 'vishnu');

// console.log(string);












