import './content.css'
import Card from './Card';
import movies from '../data/movies.json'
import { Router,Route, useNavigate, Link, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';



function Content (){
    useEffect(()=>{
    
        let con_header_div = document.querySelector('.content-header');
        let child_header_div = con_header_div.children
        for(let i=0; i<child_header_div.length;i++){
    
            child_header_div[i].addEventListener('mouseenter',()=>{
                child_header_div[i].style.border="1px groove snow";
                child_header_div[i].style.borderRadius ="10px"
    
            })
            child_header_div[i].addEventListener('mouseleave',()=>{
                child_header_div[i].style.border="none";
                child_header_div[i].style.borderRadius ="none"
    
            })
    
    
        }

        let content1_div = document.querySelector('.content-1')
        let content1_children = content1_div.children;
        console.log(content1_children)

        for (let j=0 ; j<content1_children.length;j++){
                if(content1_children[j].className =="explore"){
                    let exp_div = document.querySelector('.explore')
                    let exp_children = exp_div.children;
                    for (let k=0;k<exp_children.length;k++){
                        exp_children[k].addEventListener("mouseenter",()=>{

                            exp_children[k].style.border ="1px groove Snow";
                            exp_children[k].style.borderRadius ="10px";
                        
            
                        })
                        exp_children[k].addEventListener("mouseleave",()=>{
            
                            exp_children[k].style.border ="none";
                           
            
                        })

                    }
                
                }else{
                    content1_children[j].addEventListener("mouseenter",()=>{

                        content1_children[j].style.border ="1px groove snow";
                        content1_children[j].style.borderRadius ="10px";
        
                    })
                    content1_children[j].addEventListener("mouseleave",()=>{
        
                        content1_children[j].style.border ="none";
                        content1_children[j].style.backgroundColor="white"
        
                    })
                }
        }
    
    
    },[])
    
return(
<>
<div className="content">
<div className="content-1">
<div> <button><i class="fa fa-home" style={{fontSize:"large"}} aria-hidden="true"></i>Home</button></div>
<div><button><i class="fa fa-bolt" aria-hidden="true"></i>Shorts</button></div>
<div><button><i class="fa fa-youtube-play" style={{fontSize:"large"}} aria-hidden="true"></i>Subscriptions</button></div>
<div><button><i class="fa fa-tasks" style={{fontSize:"medium"}}  aria-hidden="true"></i>Library</button></div>
<div><button><i class="fa fa-clock-o" style={{fontSize:"large"}} aria-hidden="true"></i>History</button></div>

<div className='signin'>
<p>Sign in to like videos, comment, and subscribe</p>
<button> <i class="fa fa-user" aria-hidden="true"></i>Sign in</button>
</div>
<div className='explore'>
<p>Explore</p>
<div><button><i class="fa fa-fire" aria-hidden="true"></i>Trending</button></div>
<div><button><i class="fa fa-music" aria-hidden="true"></i>Music</button></div>
<div><button><i class="fa fa-film" aria-hidden="true"></i>Movies</button></div>
<div><button><i class="fa fa-wifi" aria-hidden="true"></i>Live</button></div>
<div><button><i class="fa fa-gamepad" aria-hidden="true"></i>Gaming</button></div>
<div><button><i class="fa fa-newspaper-o" aria-hidden="true"></i>News</button></div>
<div><button><i class="fa fa-trophy" aria-hidden="true"></i>Sports</button></div>
</div>
</div>



<div className="content-2">
<div className='content-header'>
<div ><button style={{backgroundColor:'aliceblue'}} >All</button></div>
<div><button>Music</button></div>
<div><button>Comedy</button></div>
<div><button>Gaming</button></div>
<div><button>News</button></div>
<div><button>Bollywood</button></div>
<div><button>The Muppets</button></div>
<div><button>Bollywood Music</button></div>
<div><button>Animated Films</button></div>
<div><button>Mixes</button></div>
</div>


<div className='content-main'>
{ movies.map((data)=>

<Card url={data.url} logo={data.logo} channel={data.channel} views={data.views} desc={data.desc}></Card>

)}



</div>
    



</div>

</div>
</>


)


}


export default Content;