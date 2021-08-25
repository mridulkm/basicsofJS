function add(num){
let num=4;

let sum=0; 
    for (let i=1;i<=4;i++){
        sum += i;
    }
    console.log(sum);
}


function tuckIn(arr1, arr2) {
	return [arr1[0],...arr2,arr1[1]];
}

let arr=[true ,false,true];
function countTrue(arr){
let count =0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === true){
        count++;
    }
}
return count;
}


// function multiples(num,length){
//     let mul=[];
//     for (int i=0;i<=length;i++){

//     }
// }

function multiple (7,5) {
	var result = []
    for (let i = 1; i <= 5; i++) {
        result.push(7*i)
        
    }
    return result;
}