import { useState } from "react";
import { Route, useNavigate, Link, Routes } from "react-router-dom";


function Card (props){

    let url = props.url;
let index = url.lastIndexOf(".com");
let newindex = index + (".com").length;
let remove = url.indexOf("=");
let startStr = url.substr(0,newindex);
let endStr = url.substr(remove+1,url.length);
let newurl = startStr+"/embed/"+endStr+"?autoplay=1&mute=1&controls=0&&showinfo=0";
let n_url =  startStr+"/embed/"+endStr+"?autoplay=0&mute=1&controls=0&showinfo=0";
console.log(props.logo);

    const [isHover,setIsHover] =useState(0);
    const [click,setClick] = useState(false);

  const handleClick =()=>{
    setClick(true);

  }  

const handleMouseEnter =()=>{
    setIsHover(1);}
const handleMouseLeave =()=>{
    setIsHover(0);
    setClick(false);
}

const boxStyle ={

    transition : isHover ?" transform .2s" :"0",
  
    width : isHover ?"25%" :"20%",
    height : isHover ?"60%" : "25%", 

} 

const y_url = isHover ? newurl : n_url;
 return(
    <>   
 <div className='card ' style={boxStyle} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<div className='card-vid'><a target="_blank" href={newurl}></a>
<iframe width="100%" height="100%" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}
src={y_url}>
</iframe>
</div>
<div className='card-content'>
<div className='logo'>
<img src={props.logo}/></div>
<div className='description'>
 <div className="desc"><a target="_blank" href={newurl}><b>{props.desc}</b></a></div>
<div className='channel'>{props.channel}</div>
<div className='views'>{props.views}</div>
</div>   

</div>
</div>
    </>

    )


}

export default Card;