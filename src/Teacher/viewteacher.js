import React from "react";
import {useParams}from "react-router-dom";
import {useHistory}from "react-router-dom";


function ViewTeacher ({teacher}){
    const history=useHistory();
    const {id}=useParams();
    const tea=teacher[id]
    return(
    <div>
        <button onClick={()=>history.push('/teacher')}>TeacherProfile</button>
    <h1>TeacherDetail</h1>
    <h3>{tea.name}</h3>
    <p>{tea.email}</p>
    <p>{tea.subject}</p>

    </div>
    )
}

export default ViewTeacher;