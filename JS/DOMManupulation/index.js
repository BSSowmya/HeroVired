let clickbtn = document.querySelector('.click-class');

let mainmodal = document.querySelector('.main-modal');

let cancelbtn = document.querySelector("#cancel-class");


clickbtn.addEventListener("click",()=>{console.log(clickbtn);  mainmodal.style.display ="none"});

cancelbtn.addEventListener("click",()=>{mainmodal.style.display="flex"});