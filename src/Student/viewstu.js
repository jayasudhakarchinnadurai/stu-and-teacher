import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Appcontext } from "../context/appprovider";

function Viewstudent(){
    const {user}=useContext(Appcontext)
    const history=useHistory();
    const {id}=useParams();
    const per=user[id]
    return(
        <div>
            <button onClick={()=>history.push('/student')}>Studentprofile</button>
         <h1 style={{ color: 'red',  }}>Student Details</h1>   
         <h3>{per.name}</h3>
         <p>{per.email}</p>
          <p>{per.year}</p>
        </div>
    )
}

export default Viewstudent;