import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Appcontext } from "../context/appprovider";


function Addstudents (){
    const{user,setuser}=useContext(Appcontext)
    const history=useHistory()
    const [id, setid]=useState('')
    const[name,setname]=useState()
    const [email, setemail]=useState();
    const[batch, setbatch]=useState();
    const [year, setyear]=useState();
const  students= ()=>{
    const Addstulist =
        {
            id,
            name,
            email,
            batch,
            year
        }
    
    setuser([Addstulist, ...user])
    history.push('/student')
}

    return (
<div>
    <input
    placeholder="id"
    type="number"
    onChange={(event)=>setid(event.target.value)}
    
    />
    <input
    placeholder="name"
    
    onChange={(event)=>setname(event.target.value)}
    
    />
     <input
    placeholder="email"
    type="email"
    onChange={(event)=>setemail(event.target.value)}
    
    />
     <input
    placeholder="batch"
    onChange={(event)=>setbatch(event.target.value)}
    />

<input
    placeholder="year"
   onChange={(event)=>setyear(event.target.value)}
    />

    <button onClick={students}>Addstudents</button>
</div>

    )
} 


export default Addstudents;