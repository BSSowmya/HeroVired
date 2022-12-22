// let tag = document.querySelectorAll("div");
// console.log(tag);
// let tags = document.getElementsByTagName("div");
// console.log(tags);
// let bodychild = document.getElementsByTagName("body");
// console.log(bodychild.childNodes);

// let ele1 =document.querySelector(".one");
// console.log(ele1);
let ele2 =document.querySelector("#one");
console.log(ele2);

let samplediv = document.querySelector(".one");

// console.log(samplediv.innerHTML);

// //innerHTML - returns the html content in same format as  html element

// console.log(samplediv.innerText);
// //innerText - get only Text

// console.log(samplediv.textContent)
// //textContent -- gets text content in the same format as html element

// let input1 = document.querySelector("input");
// console.log(input1.value);

let divele = document.querySelector("div");

// divele.addEventListener("click",hello);

// function hello(e){
//     alert("hello world");
//     console.log("Event is :",e)

// }

let arr =['mouseover','click','mouseout'];

for(let i=0;i<arr.length;i++){

    if(arr[i]=='mouseover'){
        divele.addEventListener(arr[i],test);
    }

    if(arr[i]=='mouseout'){
        divele.addEventListener(arr[i],test2);
    }

    if(arr[i]=='click'){
        divele.addEventListener(arr[i],test3);
    }

}


// divele.addEventListener("mouseover",test);

function test(){
    divele.style.display ="none";
}

// divele.addEventListener("mouseout",test2);

function test2(){
    divele.style.display ="block";
}
//  divele.addEventListener("mouseenter",test3);

 function  test3 (){
    console.log("mouse click")

 }

//  divele.addEventListener("mouseleave",test4);

//  function  test4 (){
//     console.log("mouse leaving")

//  }
