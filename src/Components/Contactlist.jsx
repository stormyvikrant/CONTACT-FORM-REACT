import React, { useState } from "react";
import Contactcard from "./Contactcard";
// import Contactcard from "./Contactcard";
const data=[{
    name:"vikrant",
    email:"vik@gmail.com",
    mobile:"8847577869",
    img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"

},{
    name:"ravi",
    email:"ravi@gmail.com",
    mobile:"8847575676",
    img:"https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
    
},{
    name:"karina",
    email:"karina@gmail.com",
    mobile:"7997575676",
    img:"https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
      
},{
    name:"akshay",
    email:"akashya@gmail.com",
    mobile:"99777575676",
    img:"https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
    
},

]

function Contactlist(){
   const[list,setlist]=useState(data)
//    console.log(list)

return (
    <div className="list-box">
        {list.map((elem,id)=>{
            return <Contactcard key={id} name={elem.name} email={elem.email} image={elem.img} mobile={elem.mobile}/>
        })}
    </div>
)
}

export default Contactlist
















