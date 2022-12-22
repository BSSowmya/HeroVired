// // For loops
for(let i =0; i<5;i++){
    console.log(i)
}


// // For in loops
const per1 = {
    fname: "Prashant" ,
    lname: "Dey",
    rollnum: 23
}

for (let i in per1){
    console.log(per1[i])
}

// //For of loop
const arr = ["Prashant", "Divya", "Medha"]
for (let i of arr){
    console.log(i)
}


let n = "Prashant"
for(let i in n){
    console.log(i)
}

// loop = initialization, condition/boundary, incremental
// While loop

let i =0
while(i<6){
    console.log(i)
    i++;
}

//do while

let j = 0

do{
    console.log(j)
    j++
}while(i<0)