// function fun(a,b,callback){
// return callback(a,b)

// }

// function add(a,b){

//     return a+b
// }
// let a = fun(2,3,add)

// console.log(a);

// console.log("starting the code");

// const fs = require('fs');
// fs.readFile("test.txt","utf-8",(err,data)=>{
//     console.log(data,"data from file")
// })

// console.log("at the end of file")


//event loop handles which sync and which is async

function add (a,b){

    return new Promise((resolve,reject)=>{
        c=a+b;
        if(c>5){

            resolve(c)
        }else{
            reject("error")
        }

    })
}
// add(4,2).then((data)=>{console.log(data +" resolve")}).catch((data)=>{console.log(err,"reject");})

async()=>{

    try{
        let data = await add(2,1)
        console.log(data)
  } catch(error) {
        console.log(error)
}
}

console.log("starting the code")
const fs = require('fs'); // require method is only used to require modules
const { resolve } = require('path');
// const { isArgumentsObject } = require('util/types');
// fs.readFile('test.txt',"utf-8",(err,data)=>{
//     console.log(data,"data from file");


// })
// fs.readFile('test1.txt',"utf-8",(err,data)=>{
//     console.log("data from file1",data)

// })
function reader() {
    return new Promise((resolve, reject) => {
        let arr =["test.txt","test1.txt"]
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            fs.readFile(index, "utf-8", (err, data) => {
            arr.push({data})
         })
            
        }
        resolve (arr)
       
    })
}

async function reader1(){
    return new Promise((resolve,reject)=>{
        fs.readFile('test1.txt', "utf-8", (err, data) => {
            
            if(err){
             reject(err)
            }else{
             resolve(data)
            }

     })
    })
}

// in order to handle multiple promisified function
Promise.all([reader(),reader1()]).then((data)=>console.log(data))