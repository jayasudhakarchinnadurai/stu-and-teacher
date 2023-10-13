import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Appcontext } from "../context/appprovider";


function EditStudent(){
   const {user,setuser}=useContext(Appcontext)
   const history=useHistory();
   const {id}=useParams()
   const person=user[id]
   

   const [idx,setidx]=useState();
   const[name,setname]=useState();
   const[email,setemail]=useState();
   const[batch, setbatch]=useState();
   const[year, setyear]=useState();
   
useEffect(()=>{
      setidx(person.id);
      setname(person.name);
      setemail(person.email);
      setbatch(person.batch);
      setyear(person.year);
         },[])
         
 const updateuser=()=>{
   const editindex= user.findIndex(per=>per.id === idx)
   const editstu ={

      id:idx,
      name,
      email,
      batch,
      year
   }

  user[editindex]=editstu;
   
   setuser([ ...user])
   console.log(user)
   
   history.push("/student")
  
 }   
return(
      <div>
         <input 
         placeholder="id"
         
         value={idx}
         onChange={(event)=>setidx(event.target.value)}
         
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
         placeholder="batch"
         onChange={(event)=>setbatch(event.target.value)}
         value={batch}
         />
         <input placeholder="year"
          onChange={(event)=>setyear(event.target.value)}
           value={year}
         />

         <button onClick={updateuser}>editstudent</button>
      </div>

   )
}

export default EditStudent;