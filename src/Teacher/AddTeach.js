import React from "react";

function AddTeacher ({teacher, setteacher}){
return(
    <div>
     {teacher.map((person, idx)=>{
       return <div key={idx}>
            <h3>Name:{person.name}</h3>
            <p>Email:{person.email}</p>
            <p>Subject:{person.subject}</p>
            <p>Expreience;{person.exprience}</p>

        </div>

     })}
    </div>
)
}

export default AddTeacher;