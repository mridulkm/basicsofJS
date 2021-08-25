// function add(a,b){        //1st method to create function
//     return parseInt(a) + parseInt(b);
// }

// console.log(add(1,2));
// console.log(add("a",2));

// let add=function(a,b){   //2nd method to create function
//     return parseInt(a) + parseInt(b);
// }

// function add(a,b){
//     if (isNaN(a)|| isNaN(b)){
//         return "invalid statement"
//     }else
//     return parseInt(a) + parseInt(b);
// }
// console.log(add("a",3));
// console.log(add(2,3));

//  print () ;                       // we can call a func before creating it     
// function print (){
//     console.log("hello")
// }     
// print()                   

// let print =function(){        // not used to declare function as let used . we cant make changes once
//     console.log("hello");    //  
// }

// let arr=["a","b","c","d"];
// arr.forEach(function(value,index,arr)
// {
//     console.log(value,index,arr);
// })

// let arr=["a","b","c","d"];
// arr.forEach(function(value,index,array)          
// {
//    console.log(value,index,array)
// })


// let arr2=["a","b","c","d"];
// arr2.forEach(function(value)          
// {
//    console.log(value)
// })


// CREATING MY OWN FUNCTION
// let arr=["a","b","c","d"];

// function temp(arg1,arg2,data){
//     console.log(arg1,arg2,data)
// }
// arr.forEach(temp.bind(this, "hello1","hello2"))  // this is keyword








// let arr2=["ab","cd","ef"]
// arr2.forEach(function(value,index,arr){
//   console.log()
// })

// // arr.forEach(function(bind))

// function func (array,callbackfunc){
//     for (let i=0;i<arr.length;i++){

//     }
// }
// let arr=[1,2,3,4]{
//     for (int i=0;i<arr.length;i++){
//           arr[i]+= 2;
//     }
// }

// let arr=[1,2,3,4,33,45,46,8]           // remove odd numbers from array
//     for (let i=arr.length-1;i>=0;i--){
//         if (arr[i]%2!=0){
//           arr.splice(i,1);
//         }
      
//     }
//     console.log(arr);

// let temparr=[...ar];   // to create temporary array


// let arr=[1,2,3,4,33,45,46,8] ; 



//FILTER METHOD 
// let arr=[1,2,3,4,5,6,7,8]
// arr= arr.filter(function(value){   // filter used to remove some elements from an array
//     if(value%2==1){                // filter method gives a function to return true or false only
//         return false;
//     }
//     else {
//     return true;
//     }
// })
// console.log(arr);


// TO SORT ELEMNETS IN A ARRAY
// let arr=[1,2,3,4,33,45,46,8]  
// console.log(arr.sort(function(a,b){
//     return b-a;    // returns array in descending order
// }))

// let arr=[1,2,3,4,33,45,46,8]
// console.log(arr.sort(function(a,b){
//     if(a>b){
//         return 1;
//     }else if (a<b){
//         return -1;
//     } else return 0;
// }))                      // returns array in ascending order




//MAP METHOD

// let arr=[1,2,3,4];
//for (let i=0;i<arr.length;i++){
//    arr[i]+=2;
// }
// console.log(arr) 

// let arr=[1,2,3,4];
// arr=arr.map(function(value){
//     return value+2;
// });
//  console.log(arr);

// let arr= [1,2,3,4,5,6,7,8]
//       console.log(arr.slice(1,3));
//       console.log(arr);
//       console.log(arr.splice(1,2))
//       console.log(arr);

// let arr=[1,2,3,4,5,6,7,8]
// for (let i=arr.length-1;i>=0;i--){
//     if (arr[i]%2==1)
//     arr.splice(i,1);
// }
// console.log(arr);


// let arr=[1,2,3,4,5,6,45,65,66]
// arr.forEach(function(value,index){
//    if (value%2==1)
//    arr.splice(index,1);  
// })
// console.log(arr);    // this code will get stuck in some cases like 65 


// let temparr=[...arr];   // sparcing an array i.e creating a copy of an array
// console.log(temparr)


 let arr=[1,2,3,4,5,6,45,65,66]
console.log(arr.includes(7))