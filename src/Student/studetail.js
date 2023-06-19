import React from "react";

function Student ({user, setuser}){

    const DeleteStu =(idx)=>{

        const Deleteuser=user.filter((per)=>per.id !==idx)

        setuser(Deleteuser)


    }
    return (
    <div>  
    <h2>Student Details</h2>
    <div  className='student'>
    {user.map((stu,idx)=>{
    return<div className="studata" key={idx}>
    <h3>Name:{stu.name}</h3>
    <p>Email:{stu.email}</p>
    <p>Batch:{stu.batch}</p>
    <p>Year: {stu.year}</p>
    <button className="edit">Edit</button>{" "}
    <button className="delete" onClick={()=>DeleteStu(stu.id)}>Delete</button>{" "}
    <button className="view">View</button>
    </div> 
    
    

    })}
</div>    
</div>
    )
}

export default Student;