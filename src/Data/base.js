import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function BaseApp(){
    const history=useHistory();
    return (
    <div>
        <h2 style={{color:"blue"}}>Welcome DashBorad!</h2>
        <button onClick={()=>history.push("/student")} className="stu-btn">Students Profile</button><br></br>

        <button onClick={()=>history.push("/teacher")} className="teacher-btn">Teacher Profile</button>

    </div>

    )

}

export default BaseApp;