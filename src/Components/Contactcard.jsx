import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import "./Contactcard.css"
function Contactcard ({name,image,email,mobile}) {

    const[display,setDispaly] = useState(false);

    const { getCollapseProps, getToggleProps } = useCollapse(display)
    
         const handelClick = ()=>{

            if(display===false){
             setDispaly(true);
            }
            else{
               setDispaly(false)
           }
         }


  return (
    <div className='contact-card' {...getToggleProps({onClick: handelClick})}>

      <div className='image-container'>

      <img src={image} alt="image"></img>
      </div>
      <div className='detail-container'>
            <div className='detail-div'>{name}</div>
            <div className='detail-email'>{email}</div>
            <div className="detail-div" {...getCollapseProps()}>{mobile}</div>
      </div>
    </div>
  );
}

export default Contactcard;



