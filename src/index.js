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

// let a  = [12,3,6,1,9];
// let n = a.length;
// console.log(a);
// console.log(a.sort(function (a,b)
// {

//   return a-b
// })
// );

// function findTriplets(a, n, sum) {
//   let i;

//   a.sort(function (a, b) {
//     return a - b;
//   });

//   let flag = false;

//   for (i = 0; i < n - 2; i++) {
//     if (i === 0 || a[i] > a[i - 1]) {
//       let start = i + 1;

//       let end = n - 1;

//       let target = sum - a[i];

//       while (start < end) {
//         if (start > i + 1 && a[start] === a[start - 1]) {
//           start++;
//           continue;
//         }

//         if (end < n - 1 && a[end] === a[end + 1]) {
//           end--;
//           continue;
//         }

//         if (target === a[start] + a[end]) {
//           console.log("[" + a[i] + "," + a[start] + "," + a[end] + "] ");
//           flag = true;
//           start++;
//           end--;
//         } else if (target > a[start] + a[end]) {
//           start++;
//         } else {
//           end--;
//         }
//       }
//     }
//   }

//   if (flag === false) {
//     document.write("No Such Triplets Exist");
//   }
// }

// let a = [12, 3, 6, 1, 6, 9];
// let n = a.length;
// let sum = 24;

// a.sort();
// findTriplets(a, n, sum);


//..........LEET CODE.............................


// var twoSum = function(nums, target) {
//   var map = {};
//   for(var i = 0; i <nums.length; i++) {
//       var value = nums[i];
//       var complementpair = target - value;
//       if(map[complementpair] !== undefined) {
//           return [map[complementpair],i];
          
//       }
//       else {
//           map[value] = i;
//       }
//   }
  
// };

//...................LEETCODE 2......................


// var addTwoNumbers = function (l1,l2){
//   // var ListNode;
//   let head = new ListNode(0);
//   let node = head
//   let carry = 0

//   while(l1||l2){

//     let l1value = l1 ? l1.val : 0;
//     let l2value = l2 ? l2.val : 0;
    
//     let sum  = l1value + l2value + carry;
//     carry = 0
//     let newValue  = sum;
//     if(sum > 9){
//       newValue = sum % 10
//       carry = 1
//     }
//     node.next = new ListNode(newValue)
//     node =  node.next

//     if(l1){
//       l1 = l1.next
//     }
//     if(l2){
//       console.log(l2);
//       l2 = l2.next
//     }
//   }
//   if (carry){
//     node.next = new ListNode(carry)
//   }
//   return head.next
// }

// addTwoNumbers([2,4,3],[5,6,4])

//...........................3. Longest Substring Without Repeating Character (LEETCODE)...................

// function lengthOfLongestSubstring(check) {
//   var letters = check.split("");
//   var max = 0;
//   var result = new Map();
//   var start = 0;
  
//   for (var i = 0; i < letters.length; i++) {
//     if (!result.has(letters[i])) {
//       result.set(letters[i], i);
//     } else {
//       i = result.get(letters[i]);
//       result.clear();
//     }
    
//     if (max < result.size) {
//       max = result.size;
//     }
//   }
//   return max;
// }

// // Example:
// console.log(lengthOfLongestSubstring("dvdf")); // 3

//.............................5. Longest Palindromic Substring................................

// const getDrome =  (left,right,s) => {

//   while(left >= 0 && right < s.length){
//     if(s[left]!== s[right])break;
//     left--;
//     right++;

//   }

//   return [ left+1, right]
// }


// var longestPalindrom = function(s){
//   let max  = [0,1];

//   for(let i =0; i<s.length; i++){
//     let even = getDrome(i-1, i , s);
//     let odd =  getDrome(i-1, i+1, s);
//     let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

//     max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;

//   }
//   return s.slice(max[0], max[1])
// }




//..........................reverse integer......................


// var reverse = function (num) {
  
//   const reversedNumber = parseInt(
//       Math.abs(num).toString().split('').reverse().join('')
//   );

  
//   if (reversedNumber > 2147483647) {
//       return 0;
//   }

  
//   return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
// };




//.......................... Palindrome Number...............



// var isPalindrome = function(x) {
//   if (x < 0) return false;
//   var num = x;
//   var res = 0;
//   while (num !== 0) {
//     res = (res * 10) + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return res === x;
// };


//......................13. Roman to Integer...................


// var romanToInt = function (s) {
 
//   const romanMap = new Map();
 
//   romanMap.set('I', 1);
//   romanMap.set('V', 5);
//   romanMap.set('X', 10);
//   romanMap.set('L', 50);
//   romanMap.set('C', 100);
//   romanMap.set('D', 500);
//   romanMap.set('M', 1000);
 
//   const n = s.length;
  
//   let num = romanMap.get(s[n - 1]);

//   for (let i = n - 2; i >= 0; i--) {
      
//       if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
//           num += romanMap.get(s[i]);
//       } else {
//           num -= romanMap.get(s[i]);
//       }
//   }
//   return num;
// };



// const obj1  = { a :true};
// const obj2 = obj1;
// obj1.a = "vishnu"
// // delete obj1
// console.log(obj1); // pointer....pinting to the same memory location
// console.log(obj2);



//...................linked list......................

// let myLinkedList = {
//     head: {
//         value : 10,
//         next : {
//             value : 5,
//             next : {
//                 value : 16,
//                 next : null
//             }
//         }
//     }
// }
 //..............leetcode.......................
//  var convert = function(s, numRows) {
//     if (s.length <= numRows || numRows < 2) return s;
//     var len = s.length;
//     var num = 2 * (numRows - 1);
//     var res = Array(numRows).fill('');
//     var tmp = 0;
//     for (var i = 0; i < len; i++) {
//       tmp = i % num;
//       if (tmp < numRows) {
//         res[tmp] += s[i];
//       } else {
//         res[num - tmp] += s[i];
//       }
//     }
//     return res.join('');
//   };


//.................................longest common prefix............................


var longestCommonPrefix = function (strs) {
        if (!strs.length) return '';

   
    for (let i = 0; i <= strs[0].length; i++) {
       
        for (let j = 1; j < strs.length; j++) {
          
            if (strs[0][i] !== strs[j][i]) {
                
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};




class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next : null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value){

    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append()
myLinkedList.append()
console.log(myLinkedList);