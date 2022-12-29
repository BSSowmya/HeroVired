import React,{useState} from "react";

export default function Form (){
    let [name,setName] =useState({
        username:"",
        email:"",
        password:""
      })
console.log(name,"this is our name")

function handleChange(event){
console.log(event.target.value)
setName((prev)=>{
    return{
        ...prev,
        [event.target.name]:event.target.value

    }
    
})
    
} 

function handleClick(event){

    event.preventDefault();
}
return(

    <> 
    <div className="container">
    <h1>LOGIN FORM</h1>
    </div>
    <main>
    <form className="form_class">
     <div className="div_class">
    <label>Login : </label>
     <input type="text" onChange ={handleChange} name="username"/>
    </div>   
    <div className="div_class">
    <label>Password : </label>
    <input type="text" onChange ={handleChange} name="password"/>
    </div>
    <div className="div_class">
    <label>Email : </label>
    <input type="text" onChange ={handleChange} name="email"/>
    </div>
    <button  className ="submit_class" onClick={handleClick}>Donate</button>
    </form>

    </main>
 
    </>

    
)

}
