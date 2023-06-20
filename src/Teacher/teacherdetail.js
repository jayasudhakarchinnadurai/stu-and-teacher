import React from "react";

function AddTeacher ({teacher, setteacher}){
    const Teacherdata=(idx)=>{
        const Deleteacher=teacher.filter((per)=>per.id !==idx)

        setteacher(Deleteacher)

    }
return(
    <div>
        <div>
            <h3>Teacher Details</h3>
        </div><br></br>
    <div className="Teacher">
        
     {teacher.map((person, idx)=>{
       return <div  className="Teacherdata"  key={idx}>
            <h3>Name:{person.name}</h3>
            <p>Email:{person.email}</p>
            <p>Subject:{person.subject}</p>
            <p>Expreience;{person.exprience}</p>
           <button>Edit</button><button>View</button><button onClick={()=>Teacherdata(person.id)}>Delete</button>
        </div>

     })}
    </div>
    </div>
)
}

export default AddTeacher;