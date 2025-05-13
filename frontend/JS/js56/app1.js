// // console.log("Hello World");
// // let a=10;
// // let b=5;
// // console.log("Sum is : ",(a+b));


// // let a=10;
// // let b=15;
// // alert("Danger");
// // console.log(`The total price is ${a+b}`);
// // console.error(`There is a danger`);

// // let p1 = prompt("Enter your name :");
// // console.log(p1);


// // let arr=[]
// // console.log(typeof(arr));

// // //Object literals are key value pairs 

// // let delhi = {
// //     latitude :"1234",
// //     longitude : "5678",
// // };
// // console.log(delhi);
// // console.log(typeof(delhi));

// // console.log(delhi["latitude"]);




// // function hello()
// // {
// //     console.log("hello");
// // }
// // hello();



// // function oddeven(req)
// // {
// //     if(req=="odd")
// //     {
// //         let odd = function(n)
// // {
// //     console.log(n%2!=0);
// // }
// // return odd;

// //     }
// //     else if(request=="even")
// //     {
// //         let even= function(n)
// // {
// //     console.log(n%2==0);
// // }
// // return even;
// //     }
// //     else{
// //         console.log("invalid request");
// //     }
// // }
// // let request = "odd";
// // let k=oddeven(request);
// // console.log(k);
// // k(6)



// const calc = {
    
//     // add: function(a,b)
//     // {
//     //     return a+b;
//     // },
//       add(a,b)
//     {
//         return a+b;
//     },
//     // sub: function(a,b)
//     {
//         return a-b;
//     },
//     multi: function(a,b)
//     {
//         return a*b;
//     }
// }
// console.log(calc.add(3,4));



// let sum = (a,b)=>
// (
//     console.log(a+b)
// );
// sum(5,6);





// setTimeout function
//Prints only ones


// setTimeout(()=>
// {
//     console.log("hello");
// },4000);



// setInterval function
//prints continuously


// setInterval(()=>
//     {
//         console.log("hello");
//     },1000);
    
    

// Methods in an array



// 1) forEach() Method...
let arr=[1,2,3,4,5]
function print(el)
{
    console.log(el);
}
arr.forEach(print);


arr.forEach(function(el) {
    console.log(el);
})


//2) Map 

let arr1=[1,2,3,4,5]
let double = arr1.map(function(e1)
{
   return  e1*e1;
})


// 3) Filter

let arr2=[1,2,3,4,5]
let even= arr2.filter((el)=>{
    return el%2==0;
})


// 4) Every ans Sum

// Returns True or False if all elements in the array are true or false


let arr3=[0,2,3,4,6]
let k = arr3.every((el)=>{
    return el%1==2});
console.log(k); // false



// 5) Reduce

// Returns the sum of all elements in the array

// let arr4=[1,2,3,4,5]
// let k1 = arr4.reduce((a,b)=>a+b);
// console.log(k1);



let arr5 = [1,4,2,56,7,1,2,4,122];
let maxi=arr5.reduce((max,el)=>{
    if(max>el)
    {
        return max;
    }
    else{
        return el;}});
console.log(maxi);



// 6) Spread Function

arr=[1,2,3,4,56,6,6,6]
console.log(Math.min(...arr));


// 7) Rest 
// Rest is used to pass a variable number of arguments to a function.
