var flag =true;
         
var i=0;
var corrCount =0;
var quest=[
   {
    no:1,
   question: 'The world will little note, nor long remember, what we say here, but it can never forget what they did here.',
   options: ['Benjamin Franklin','Thomas Edison','Abraham Lincoln','Vince Lombardi'],
   ans:'Abraham Lincoln'
   },
   {
    no:2,
   question: 'The arc of the moral universe is long, but it bends toward justice.',
   options: ['Confucius','Oliver Wendell Holmes','Martin Luther King, Jr.','Socrates'],
   ans:'Martin Luther King, Jr.'
   }, 
   {
    no:3,
   question: 'What does not kill me makes me stronger.',
   options: ['Joey Chestnut','Friedrich Nietzsche','Theodore Roosevelt','Jonas Salk'],
   ans :'Friedrich Nietzsche'
   },
   {
    no:4,
    question: 'When people show you who they are, believe them.',
   options: ['Benedict Arnold','Sigmund Freud','Andy Warhol','Oprah Winfrey'],
   ans:'Oprah Winfrey'
   },
   {
    no:5,
    question: 'Float like a butterfly, sting like a bee.',
   options: ['Muhammad Ali','Sun Tzu','Jack the Ripper','Douglas MacArthur'],
   ans:'Muhammad Ali'

   }   
]   
const len = quest.length;
function myclick(){
  

   const element = document.getElementById("quiz");
   element.remove();      
  // defineDiv();
   let q1 = document.getElementById("main");
   
   n = document.getElementById("btn1");
   if (i<len){
   // alert("for loop" + i);
    console.log(flag);
    addnremove();
    //n.addEventListener("click",addQuestions(quest[i]));
   
}
}
function addnremove(){ 
     //  alert("addnremove");
       if(document.getElementById("ques")){
      // alert("remove")
       const element = document.getElementById("ques");
       element.remove(); 
       i++;
       addQuestions(quest[i]);   
       }else{
     //  alert("new")
       addQuestions(quest[i]);
       }
              

}
function addQuestions(quest){   
   // if(document.getElementById("ques")){
   //     remove();
   // }
   if(i<len){
       addQuiz();
   let  d = document.getElementById("ques");         
             
   let q1 = document.getElementById("main");
   var para = document.createElement("h2");
   para.id="node";
   var no=i+1;
    var node = document.createTextNode("Q" +no+":"+ quest.question);
    para.appendChild(node);
    d.appendChild(para);
    var ques_div = document.createElement("div");
    var ques_node =document.createTextNode("");
    ques_div.appendChild(ques_node);
    ques_div.setAttribute("class","ques_div")
  // alert("here");        
   var a =quest.options.length;     
    for (var j=0;j< a;j++){
     //  alert("here"); 

    var in1 = document.createElement("input");
    var val1= document.createTextNode("");
    in1.setAttribute("type", "checkbox");
    in1.setAttribute("name", "checkbox");
    in1.setAttribute("value", quest.options[j]);
    in1.setAttribute("id", "check" +(j+1));
    in1.appendChild(val1);
    ques_div.appendChild(in1);          
    var  l1= document.createElement("label");
    var txt1= document.createTextNode(quest.options[j]);
    l1.setAttribute("for", quest.options[j]);
    var b1= document.createElement("br");
    var txt2= document.createTextNode("");
    b1.appendChild(txt2);
    l1.appendChild(txt1);
    ques_div.appendChild(l1);
    ques_div.appendChild(b1);   
    d.appendChild(ques_div);
    
    }          
   var btn = document.createElement("button");
   var text= document.createTextNode("Next");
   btn.appendChild(text);
   d.appendChild(btn);
   btn.setAttribute("value", "Next");
   btn.setAttribute("id", "next");
   btn.disabled = true;
   btn.setAttribute("onclick", "addnremove()");  
   displayAns();    
   isEmpty();   
   q1.appendChild(d);
   document.body.appendChild(q1); 
  

   } else{                 
   let q1 = document.getElementById("main");   
   var head = document.createElement("h1");
   var text= document.createTextNode("Thank You!! End of Quiz");
   head.appendChild(text);
   let p = document.createElement("p");
   var score= document.createTextNode("Your score is "+corrCount+"/5");
   p.setAttribute("class","score")
   p.appendChild(score);
   q1.appendChild(head);
   q1.appendChild(p);
   btn.setAttribute("id", "head");
   document.body.appendChild(q1); 

   }
   
   
}     
function defineDiv(){
let q1 = document.getElementById("main");
q1.style.backgroundColor ="lightgrey";
q1.style.width="300px";
q1.style.border="15px black";
q1.style.padding="50px";
q1.style.margin="auto";  

}
   
function addQuiz(){
//alert("in quiz");
let q1 = document.getElementById("main");
   var d = document.createElement("div");
   var n = document.createTextNode("");
   d.setAttribute("id","ques")
   d.setAttribute("class","ques")
   d.appendChild(n);
   q1.appendChild(d);
   d.style.display = 'block'    
   document.body.appendChild(q1); 

}

function isEmpty(){
    let checked=0;
    let checkbox = document.getElementsByName( "checkbox" );
    let button1 = document.getElementById( "next" );  
    let button2 = document.getElementById( "ans" ); 
    for ( let i = 0; i < checkbox.length; i++ ) {
        checkbox[i].addEventListener( "change", () => {
            
            for ( let i = 0; i < checkbox.length; i++ ) {
                if ( checkbox[i].checked == false ){
                    button1.disabled = false;
                    button2.disabled = false;
                    
                    
                }else{
                    checked++;
                }
               
                
             }
             if(checked>1){
                button1.disabled = true;
                button2.disabled = true;
                checked=0;
             }else if (checked==1){
                button1.disabled = false;
                button2.disabled = false;
                checked=0;
                var ans_check = document.getElementById("check"+(i+1)); 
                var checked_ans = ans_check.value;  

                for(let index=0;index<quest.length;index++){
                    if(quest[index].ans == checked_ans){
                       corrCount++;
                    }
            
            
                 }

             }else if (checked==0){
                button1.disabled = true;
                button2.disabled = true;
                    
             }
               
            
        });
     }

}

function displayAns(){
    let q1 = document.getElementById("main");
    let  d = document.getElementById("ques");      
    var btn = document.createElement("button");
    var text= document.createTextNode("Ans");
    btn.appendChild(text);
    d.appendChild(btn);
    btn.setAttribute("value", "Ans");
    btn.setAttribute("id", "ans");
    btn.setAttribute("onclick", "findAns()");  
    btn.disabled = true;
    q1.appendChild(d);
    document.body.appendChild(q1); 
 }

 function findAns(){
    let q1 = document.getElementById("main");
    let  d = document.getElementById("ques");   
    let button2 = document.getElementById( "ans" );   
    let checkbox = document.getElementsByName( "checkbox" );
    var checked_ans="";
    for (let k=0; k<checkbox.length;k++){
               
               if(checkbox[k].checked == true){
                
                var ans_check = document.getElementById("check"+(k+1)); 
                checked_ans = ans_check.value;  
                console.log(checked_ans)
                let div = document.createElement("div");
                let text  = document.createTextNode("Ans : " +quest[i].ans);
                div.setAttribute("class","ans-div")
                div.appendChild(text);
                d.appendChild(div);
                q1.appendChild(d);
                button2.disabled =true;
               }else{
                checkbox[k].disabled =true;
               }

    }
 
    
 }
