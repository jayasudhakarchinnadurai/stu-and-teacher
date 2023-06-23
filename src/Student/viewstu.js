import React from "react";
import { useEffect } from "react";

import { useState } from "react";

import {useParams}from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function EditStudent({user, setuser}){
    const history=useHistory()

    const {id}=useParams()
    console.log(id)
   
    const [idx, setidx]=useState("");
    const [name, setname]=useState("");
    const [batch, setbatch]=useState("");
    const [email, setemail]=useState("");
    const [exprience, setexprience]=useState("");

    const selectuser=user.find((per)=>per.id === id)
    

    useEffect(()=>{
        setidx(selectuser.id)
        setname(selectuser.name)
        setbatch(selectuser.batch)
        setemail(selectuser.email)
        setexprience(selectuser.exprience)
    },[])

    const updateuser =()=>{

        const editindex=user.findIndex((per)=>per.id === id)
        console.log(editindex)
       
        const editdata={
            idx,
            name, 
            batch,
            email,
            exprience
        }
        console.log(editdata)
        user[editindex] =editdata;
        setuser([...user])
        history.push("/")
    }
    
  
   return (
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
    
        <input 
        placeholder="batch"
        value={batch}
        onChange={(event)=>setbatch(event.target.value)}
        />
        <input  
        placeholder="email"
        value={email}
        onChange={(event)=>setemail(event.target.value)}
        />
        <input
         placeholder="exprience"
        value={exprience}
        onChange={(event)=>setexprience(event.target.value)}
        />
        <button onClick={updateuser}>Edituser</button>
    
    </div>
   )
}


export default EditStudent;