import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Appcontext } from "../context/appprovider";

function Addteacherdata(){
    const {teacher,setteacher}=useContext(Appcontext)
    const history=useHistory()
    const [id, setid]=useState('')
    const[name,setname]=useState()
    const[email,setemail]=useState()
    const[exprience,setexprience]=useState()
    const[subject,setsubject]=useState();

    const Addteacher =()=>{
       
        const teacherlist={
            id,
            name,
            email,
            subject,
            exprience

        }

        setteacher([teacherlist,...teacher])
        history.push("/teacher")

        

    }

    return(
     <div>
<input 
placeholder="id"

onChange={(event)=>setid(event.target.value)}

/>
<input 
placeholder="name"

onChange={(event)=>setname(event.target.value)}

/>
<input 
placeholder="email"

onChange={(event)=>setemail(event.target.value)}

/>
<input 
placeholder="subject"

onChange={(event)=>setsubject(event.target.value)}

/>
<input 
placeholder="exprience"

onChange={(event)=>setexprience(event.target.value)}

/>

<button onClick={Addteacher}>AddTeacher</button>

     </div>
        

    )
}

export default Addteacherdata;