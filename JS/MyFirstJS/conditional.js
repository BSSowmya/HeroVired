const today = new Date()

let  myday = today.getDay()

// switch (myday){
// case 0:
//     console.log("Sunday");
//     break;
// case 0:
//     console.log("Monday");
//     break;
// case 1:
//     console.log("Tuesday");
//     break;
// case 2:
//     console.log("Wednesday");
//     break;
// case 3:
//         console.log("Thursday");
//         break;
// case 4:
//         console.log("Friday");
//         break;
// case 5:
//         console.log("Saturday");
//         break;
// default:
//     console.log("No day ");


// }
const arr =["a","b","c","d","e"];
 var rn = Math.floor(Math.random()*1000) %arr.length  
 //console.log(Math.random()*1000)
//console.log(arr[rn]);
arr.forEach(newfun)
function newfun(value,index,arry){
 //   console.log(arry)

}

let arr1 =[1,2,3,4,5]; 
arr1.push(5);
//console.log(arr1);
arr1.pop();
//console.log(arr1);
arr1.shift();
//console.log(arr1);
arr1.unshift(7);


let  arr2=[7,7,1,2,2,3,4,4,5,5,6];

//find the duplicates in array and frequency
arr2.sort();
//console.log(arr2);
for(var i=0;i<arr2.length;i++){

    if(arr2[i]== arr2[i+1]){
       // console.log(arr2[i])
    }

}

let obj={
        name :"Sowmya",
        age:5
}
for(let i in obj){
    console.log("key is :" +i +" value : " +obj[i])

    if(i !="color"){
        obj.color ="red"
    }
}

delete obj["age"];
console.log(obj);

