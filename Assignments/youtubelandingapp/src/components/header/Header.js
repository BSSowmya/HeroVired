import './header.css'
import React,{useEffect, useState} from 'react';
function Header (){
    const [isHover, setIsHover] = useState(false);


    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    const boxStyle = {
        border:  isHover ? '1px solid black' : '0',
        'border-radius' :'20px',
    };
useEffect(()=>{
    let section1_div = document.querySelector('.section1')
    console.log(section1_div)
    let childofsection1 = section1_div.children
       for (let i=0 ;i<childofsection1.length;i++){    
            
            childofsection1[i].addEventListener("mouseenter",()=>{
                childofsection1[i].style.backgroundColor="rgb(247, 233, 233)"
                childofsection1[i].style.borderRadius="50%"
    
            })
            childofsection1[i].addEventListener("mouseleave",()=>{
                childofsection1[i].style.backgroundColor="white"
                childofsection1[i].style.borderRadius="0"
    
            })
        
      
    }

    let section2_div = document.querySelector('.section2')
    console.log(section2_div)
    let childofsection2 = section2_div.children
       for (let i=0 ;i<childofsection2.length;i++){
        console.log(childofsection2[i].className)
        let c_name = childofsection2[i].className
        if (c_name =="search"){
            let search_div = document.querySelector('.search')
            let child_search = search_div.children
            for (let j=0;j<child_search.length;j++){
                if(child_search[j].className==='input'){
                    child_search[j].addEventListener("click",()=>{
                        child_search[j].style.border ="1px solid black";
                        child_search[j].style.borderRadius ="20px 0 0 20px";
            
                    })
                    child_search[j].addEventListener("mouseleave",()=>{
                        child_search[j].style.border ="none";
                        child_search[j].style.borderRadius ="20px 0 0 20px";
            
                    })

                }
            }

         
        }else if (childofsection2[i].className =="fa fa-microphone"){
            childofsection2[i].addEventListener("mouseenter",()=>{
                childofsection2[i].style.border ="1px solid black";
                childofsection2[i].style.borderRadius ="60%";
                childofsection2[i].style.backgroundColor ="rgb(247, 233, 233)"
            })
            childofsection2[i].addEventListener("mouseleave",()=>{
                childofsection2[i].style.border ="none";
                childofsection2[i].style.backgroundColor ="white"
               
    
            })

        }
       
    }

    let section3_div = document.querySelector('.section3')
    console.log(section3_div)
    let childofsection3 = section3_div.children
       for (let i=0 ;i<childofsection3.length;i++){

        childofsection3[i].addEventListener("mouseenter",()=>{
                childofsection3[i].style.borderRadius="50%"
                childofsection3[i].style.backgroundColor="rgb(247, 233, 233)"

            

        })
        childofsection3[i].addEventListener("mouseleave",()=>{
            childofsection3[i].style.borderRadius="10px"
            childofsection3[i].style.backgroundColor="white"

        })
    }


},[])

return(
<>
<div className="header">

<div  className='section1'>
<i class="fa fa-bars"></i>
<img src="/images/youtube.png"/>
</div>

<div className='section2'>
<div className='search'>
<input type="text" placeholder='search'/>
<button><i class="fa fa-search" aria-hidden="true"></i> </button> 
</div>
<i class="fa fa-microphone" aria-hidden="true"></i>
</div>

<div className='section3'>
<i class="fa fa-bullhorn" aria-hidden="true"></i>
<i class="fa fa-bell-o" aria-hidden="true"></i>
<div>
<button >
    <i class="fa fa-user" aria-hidden="true"></i>
    sign in</button>
</div>

</div>
</div>
{




}
</>



)



}

export default Header;