//let str="Bhavesh Kumar";

//for (let i=0;i<str.length;i++){
 //   console.log(str[i]);
    
 //   console.log(str.charCodeAt(i));  // to get ascii value of string str declared
// } 
//str[0]="A"; // not possible as string is immutable
//let ans="";
//for (let i=0;i<str.length;i++){
 //   ans+=str[i];
// }
// console.log(ans);
// let count =0;
//let str="dbdhagdhabhjdsbhjsdbhbc";
//for (let i=0;i<str.length;i++){
  //  if(str[i]=='b'){
    //    count ++;
 //   }
//  }
  //  console.log(count); 

  
 //let number="127832772"
 //let ans=0;
 //for (let i=0;i<number.length;i++){
   //  ans+=parseInt(number[i]);
   //  ans+=parseInt(str.substr(i,2));
     // converts string into integer
 //}
// console.log(ans);


//let str="1234";
//let ans=0;
//for (let i=0;i<str.length;i+=2){
 //   ans+=parseInt(str.substr(i,2));  // adding 2 no.s together . here 
    // converts string into integer
// }
// console.log(ans);

// let str2="1A2";  
//let ans=0;
//for (let j=0;j<str2.length;j++){
  //  if (str2.charCodeAt(i)>48 && str2.charCodeAt(i)<=57){
    //    ans+=parseInt(str2[i]);
  //  }
   // else (str2.charCodeAt(i));
 // }
 // console.log(ans);
//console.log(str2.charCodeAt(i));

// one nan code left

// let str="Bhavesh Bansal"; //reverse a string
// let ans=" ";
// for (let i=str.length;i>=0;i--){
//     ans=ans+str[i] ; 
// }
// console.log(ans);

//  let str="Bhavesh Bansal"; // we will reverse str first. then start 
//  let revstr=" ";
//  for (let i=str.length;i>=0;i--){
//         revstr+=+str[i] ; 
//       }

//      let sp=undefined;
//      let ep=revstr.length;
//      let ans="";
// for (i=revstr.length-1;i>=0;i--){
// if (revstr[i]== " "){
//     sp=i+1;
//     ans+=revstr.substring(sp,ep)+ " ";
//     ep=i;
//     sp=undefined;
// } else if (i==0) {
//     sp=0;
//     ans+=revstr.substring(sp,ep);
// }
//    }  // check answer 
     
//palindrome question

// let str="abbba"; // its a palindrome
// let ans=true;
// for (let i=0, j=str.length-1;i<j;i++,j--){
//     if (str[i]!=str[j]){
//          ans= false;
//     }
// } 
// console.log(ans);




                                              // CLASS NOTES                   


let str = "Bhavesh Bansal";


for(let i = 0; i < str.length; i++) {
  let ans="";
  ans += str[i] + ", ";
}

console.log(ans);

// let str2="mridul kumar";
// let ans2=""
// for (let i=0;i<str2.length;i++){
//     ans2= ans2+ str2[i]+", "
// }
// console.log(ans2)


// let str = "Bhavesh Bansal";

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
// }

// let str="jfuijihdfbbsdfsdfvsdfhvsbfsdfsdhfb";
// let count = 0;

// for(let i = 0; i < str.length; i++) {
//     if(str[i] == 'b') {
//         count++;
//     }
// }

// console.log(count);

// let number = "12";
// console.log(parseInt(number));
// let str = "23456";
// let ans = 0;


// for(let i = 0; i < str.length; i+=2) {
//     console.log(str.substr(i,2));
// ans += parseInt(str.substr(i,2));
// }
// console.log(ans);


// let str = "1A2";
// let ans = 0;
// for(let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])) {
//         ans += parseInt(str[i]);
//     } else {
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);            


// //IMP , DID NOT UNDERSTAND FROM HERE

// let str = "Bhavesh Bansal";
// let revstr = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     revstr += str[i];
// }

// let sp = undefined;
// let ep = revstr.length;
// let ans = "";
// for(let i = revstr.length - 1; i >= 0; i--) {
//     if(revstr[i] == " ") {
//         sp = i + 1;
//         ans += revstr.substring(sp,ep) + " ";
//         ep = i;
//         sp = undefined;
//     } else if(i == 0) {
//         sp = 0;
//         ans += revstr.substring(sp,ep);
//     }
// }
// console.log(ans);       // DID NOT UNDERSTAND TILL HERE

// let sp = 0;
// let ep = undefined;
// let ans = "";
// for(let i = 0; i <= revstr.length-1; i++) {
//     if(revstr[i] == " ") {
//         ep = i;
//         ans = " " + revstr.substring(sp,ep) + ans;
//         ep = undefined;
//         sp = i + 1;
//     } else if(i == (revstr.length - 1)) {
//         ep = revstr.length;
//         ans = revstr.substring(sp,ep) + ans;
//     }
// }
// console.log(ans);

//palindrome question

// let str = "abbhba";
// let ans = true;
// for(let i = 0, j = str.length-1; i <= j; i++, j--) {
//     if(str[i] != str[j]) {
//         ans = false;
//         break;
//     }
// }

// console.log(ans);

