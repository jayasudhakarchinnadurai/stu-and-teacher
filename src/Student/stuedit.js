import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function EditStudent({user, setuser}){
   const history=useHistory();
   const {id}=useParams()
   console.log(id)
   const selectuser= user.find((per,indx)=>per.id === id);
    console.log(selectuser);
 
   const [idx,setidx]=useState();
   const[name,setname]=useState();
   const[email,setemail]=useState();
   const[batch, setbatch]=useState();
   const[year, setyear]=useState();
   



   
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

         <button >editstudent</button>
      </div>

   )
}

export default EditStudent;