import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function TeacherDetail ({teacher, setteacher}){
    const history=useHistory()
    const Teacherdata=(idx)=>{
        const Deleteacher=teacher.filter((per)=>per.id !==idx)

        setteacher(Deleteacher)

    }
return(
    <div>
        <div>
            <button onClick={()=>history.push('/student')}>StudentProfile</button>
            <button onClick={()=>history.push('/teacheradd')}>AddTeacher</button>
            
            <h3>Teacher Details</h3>
        </div><br></br>
    <div className="Teacher">
        
     {teacher.map((person, idx)=>{
       return <div  className="Teacherdata"  key={idx}>
            <h3>Name:{person.name}</h3>
            <p>Email:{person.email}</p>
            <p>Subject:{person.subject}</p>
            <p>Expreience;{person.exprience}</p>
           <button>Edit</button><button onClick={()=>history.push(`/views/${idx}`)}>View</button><button onClick={()=>Teacherdata(person.id)}>Delete</button>
        </div>

     })}
    </div>
    </div>
)
}

export default TeacherDetail;