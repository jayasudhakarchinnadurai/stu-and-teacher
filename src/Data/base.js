import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function BaseApp(){
    const history=useHistory();
    return (
    <div>
        <h3>DashBorad</h3>
        <button onClick={()=>history.push("/student")}>Students Profile</button><br></br>

        <button onClick={()=>history.push("/teacher")} >Teacher Profile</button>

    </div>

    )

}

export default BaseApp;