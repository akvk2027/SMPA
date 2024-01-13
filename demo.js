// variables 

// var num =10
// var num1=20
// var sum=num+num1
// console.log(sum)

// function 
// var a=10
// var b=20
// var c=a+b
// function add(){
//     console.log(c)
// }
// add()


// var  Actor="DQ"
// var Player="Dhoni"
// var Movie="sita rammam"


// function favourite(){
//     console.log("Favourite actor:"+ Actor)
//     console.log("Favourite Player:"+ Player)
//     console.log("Favourite Movie:"+ Movie)
// }
// favourite()


// function area (length,breadth){
//     console.log(length*breadth)
// }
// area(5,5)
// function add(a,b)
// {

//     return a+b
// }
// var total=add(10,20)
// console.log(total)


// var rain =true
// if(rain )
// {
// console.log("Take an Umbrella");
// }
// else{
//     console.log("Enjoy the sunshine"); 
// }


// var season ="summer"
// if(season == "spring")
// {
//     console.log("Enjoy the blooming flower")

// }
// if(season == "summer")
// {
//     console.log("have fun in the sum")

// }

// if(season == "autumn")
// {
//     console.log("Admire the colourfull leaves")

// }

// var score = 70
// if (score<=80)
// {
//     console.log("good job")
// }

//reverse number
// for(i=10; i>=1;i--){
//     console.log(i)
// }


// console.log(true && true && false)
// console.log(true || true || false)
// console.log(!true)

// for(var i=1; i<=10; i++){
// if (i % 2 === 0){
//     console.log("even")

// }
// else{
//     console.log(" is odd");
// }



// }

//odd or even
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//     console.log(i);
//     } 
//     }

// for (i = 1; i <= 10; i=i+1)   {
//     console.log(i+"*2="+i*2);
// }
// console.log(Math.random())
// var a=Math.floor(6.99)
// console.log(Math.floor(Math.random()* 10)+1)




// array


// var fruit=["apple","mango","orange","grapes"]
// fruit[1]="strawberry"
// console.log(fruit.length)
// for(i=0;i<fruit.length;i=i+1){
//     console.log(fruit[i])
// }


// for(i=1; i<=10; i=i+1)

// {

//    console.log(i + "*2 =" +i*2)
// }

//    if(i % 2 == 0)
//    {
//     console.log("even:" +i)
//    }
// else{
//     console.log("odd:" +i)   
// }

// var num =[1,2,3,4,5]
// console.log()



// function myfunction(){
//     var a= 5;
//     console.log(a*a)
// }
// myfunction();



//     function tricky(){
//     for(let i=0; i<5; i++){
//         setTimeOut(function (){
//             console.log(i)
//         },0);
//     }
// }
// tricky()


// var fruits=["apple", "orange"]

// fruits.length=0
// console.log(fruits[0])

// let i;
// for(i=0; i<4; i++){
//     const log=()=>{
//     console.log(i)
// }
// setTimeout(log)
// }

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }

//   const originalString = "Hello, World!";
//   const reversedString = reverseString(originalString);
//   console.log(reversedString);

// function reverseStringInSamePosition(inputString) {
//   // Split the string into an array of characters
//   var characters = inputString.split('');

//   // Reverse the array of characters
//   characters.reverse();

//   // Join the array back into a string
//   var reversedString = characters.join('');

//   // Return the reversed string
//   return reversedString;
// }

// // Example usage
// var originalString = "hello world";
// var reversedString = reverseStringInSamePosition(originalString);

// console.log("Original String: " + originalString);
// console.log("Reversed String: " + reversedString);

// function reverseWordsInPlace(str) {
//   // Split the string into an array of words
//   let wordsArray = str.split(' ');

//   // Reverse each word in the array
//   for (let i = 0; i < wordsArray.length; i++) {
//     wordsArray[i] = reverseString(wordsArray[i]);
//   }

//   // Join the words back into a string
//   let reversedString = wordsArray.join(' ');

//   return reversedString;
// }

// // Helper function to reverse a string
// function reverseString(s) {
//   return s.split('').reverse().join('');
// }

// // Example usage
// let originalString = "hello world";
// let reversedString = reverseWordsInPlace(originalString);

// console.log("Original String:", originalString);
// console.log("Reversed String:", reversedString);


// // Helper function to reverse a string
// function reverseString(s) {
//   return s.split('').reverse().join('');
// }


// function stringReverseWord(str) {
//   const splitString = str.split(/[,]+/)
//   let final_result = ''
//   let cache = ''
//   for (let i = 0; i < splitString.length; i++) {
//     for (let j = 0; j < splitString[i].length; j++) {
//       cache = splitString[i][j] + cache
//     }
//     final_result = final_result + '' + cache
//     cache = ''
//   }
//   return final_result
// }
// console.log(stringReverseWord('hello world'))


// let userAge=[5,10,2,12,17,19,22,1]
// let doubleAge=userAge.map(item => item*2)
// console.log(userAge)
// console.log(doubleAge)


// let userAge=[5,10,2,12,17,19,22,1]
// const userCanVote=userAge.filter(age => age>18)
// console.log(userCanVote.length)

// let heroSalary =[
//   {name:"kavya", salary:12000},
//   {name:"ajay", salary:10000},
//   {name:"elambu", salary:9000},
//   {name:"jayan", salary:25000},
//   {name:"kannan", salary:20000},
// ];
// let minSalary = 10000
// let maxSalary = 30000
//  let salaries= heroSalary.filter(hero =>{
//   return hero.salary >= minSalary && hero.salary<=maxSalary;
//  });
// console.log(salaries)


// let item =[
//     {name:"briyani", price:150},
//     {name:"fried rice", price:200},
//     {name:"mutton briyani", price:90},
//     {name:"french fries", price:45},
//     {name:"chilly chicken", price:25},
//   ];
  // fileter method------------------------------------------
  //  const filteredElement = item.filter((item) =>{
  //   return item.price >=50;
  //  });
  // console.log(filteredElement)

  
  
  // map method-------------------------------------
  // const itemPrice= item.map(item =>{
  //   return item.name
  // })
  // console.log(itemPrice)


  // ------------------------------------------------------------


// find method()--------------------------

// const findItem=item.find((item) =>{
//   return item.name ==="biriyani" 
// });
// console.log(findItem)

//--------------------foreach()------------------------

// item.forEach((item)=>{
//   console.log(item.price +10)
// });


// some()------------------------------------
// const hasExpensiveItem=item.some((item)=>{
//   return item.price <=100
// });
// console.log(hasExpensiveItem)

// every()---------------------------------------
// const hasExpensiveItem=item.every((item)=>{
//   return item.price >=100
// });
// console.log(hasExpensiveItem)

// reduce------------------------------
// const total = item.reduce((currentTotal, item)=>{
//   return item.price + currentTotal
// }, 0);
// console.log(total)


// include()---------------------------------------------------------
// let array=[1,2,3,5,6,7]
// console.log(array.includes(6))