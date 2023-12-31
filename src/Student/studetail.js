import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Appcontext } from "../context/appprovider";

function Student (){
    const {user,setuser}=useContext(Appcontext)
    const history=useHistory();

    const DeleteStu =(idx)=>{

        const Deleteuser=user.filter((per)=>per.id !==idx)

        setuser(Deleteuser)


    }
    return (
    <div> 
        <button  onClick={()=>history.push("/")} className="teacher-btn" >DashBorad</button> 
        <button onClick={()=>history.push('/addstudents')} className="addstu-btn">Addstudents</button><br></br>
    <h2>Student Details</h2>
    <div  className='student'>
    {user.map((stu,idx)=>{
    return<div className="studata" key={idx}>
    <h3>Name:{stu.name}</h3>
    <p>Email:{stu.email}</p>
    <p>Batch:{stu.batch}</p>
    <p>Year: {stu.year}</p>
    <button className="edit" onClick={()=>history.push(`/editstudent/${idx}`)} >Edit</button>{" "}
    <button className="delete" onClick={()=>DeleteStu(stu.id)}>Delete</button>{" "}
    <button className="view" onClick={()=>history.push(`/view/${idx}`)}>View</button>
    </div> 
    
    

    })}
</div>    
</div>
    )
}

export default Student;