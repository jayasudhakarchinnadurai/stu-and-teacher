import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Appcontext } from "../context/appprovider.js";


function EditTeacher(){
  const{teacher,setteacher}=useContext(Appcontext)
   const history=useHistory();
   const {id}=useParams()
   const data =teacher[id]
  
   

   const [idteach, setidteach]=useState('')
   const[name,setname]=useState()
   const[email,setemail]=useState()
   const[exprience,setexprience]=useState()
   const[subject,setsubject]=useState();




   useEffect(()=>{
      setidteach(data.id);
      setname(data.name);
      setemail(data.email);
      setsubject(data.subject);
      setexprience(data.exprience);
         },[])
         
 const updateuser=()=>{
   const editindex= teacher.findIndex(per=>per.id === idteach)
   const editstu ={

      id:idteach,
      name,
      email,
      exprience,
      subject
   }

  teacher[editindex]=editstu;
   
   setteacher([ ...teacher])
   
   
   history.push("/teacher")
  
 }   
return(
      <div>
         <input 
         placeholder="id"
         
         value={idteach}
         onChange={(event)=>setidteach(event.target.value)}
         
         />
         <input 
         placeholder="name"
         value={name}
         onChange={(event)=>setname(event.target.value)}
         />
         <input placeholder="email"
          onChange={(event)=>setemail(event.target.value)}
         value={email}
         />
         <input 
         placeholder="exprience"
         onChange={(event)=>setexprience(event.target.value)}
         value={exprience}
         />
         <input placeholder="subject"
          onChange={(event)=>setsubject(event.target.value)}
           value={subject}
         />

         <button onClick={updateuser}>editteacher</button>
      </div>

   )
}

export default EditTeacher;