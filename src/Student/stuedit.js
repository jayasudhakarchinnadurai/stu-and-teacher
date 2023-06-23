import React from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom";
// // import { useEffect } from "react";

// import { useState } from "react";

import {useParams}from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function EditStudent({user, setuser}){
   const {id}=useParams();
   const per=user[id]
    
   return(
      <div>
         <input
          value={per.id}
         />

      </div>
   )
}


export default EditStudent;