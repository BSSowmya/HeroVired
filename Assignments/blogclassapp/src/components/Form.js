import React from "react";
import './style.css'



class Form extends React.Component{
    constructor(){
        super();
        this.state ={
          username:"",
          email:"",
          password:""

        }


    }

     handleChange(event){
      console.log(event.target.value)
      this.state.setName((prev)=>{
          return{
              ...prev,
              [event.target.name]:event.target.value
      
          }
          
      })
          
      } 
      
       handleClick(event){
      
          event.preventDefault();
      }


  render(){
    return(
        <>

<div className="container">
    <h1>LOGIN FORM</h1>
    </div>
    <main>
    <form className="form_class">
     <div className="div_class">
    <label>Login : </label>
     <input type="text" onChange ={this.handleChange} name="username"/>
    </div>   
    <div className="div_class">
    <label>Password : </label>
    <input type="text" onChange ={this.handleChange} name="password"/>
    </div>
    <div className="div_class">
    <label>Email : </label>
    <input type="text" onChange ={this.handleChange} name="email"/>
    </div>
    <button  className ="submit_class" onClick={this.handleClick}>Donate</button>
    </form>

    </main>
        </>



    )



  }

}

export default Form;