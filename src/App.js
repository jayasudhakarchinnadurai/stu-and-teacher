
import { useState } from 'react';
import './App.css';
import { Studentdata } from './Data/studentdata.js';
import Student from './Student/studetail.js';
import BaseApp from './Data/base.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Addstudents from './Student/Addstu.js';
import { Teacher } from './Data/Teacherdata.js';
import TeacherDetail from './Teacher/teacherdetail.js';
import Addteacherdata from './Teacher/AddTeacher.js';
import Viewstudent from './Student/viewstu';
import ViewTeacher from './Teacher/viewteacher';
import EditStudent from './Student/stuedit.js';
import { Appcontext } from './context/appprovider.js';
import EditTeacher from './Teacher/editteacher';
function App() {
  const [user, setuser]=useState(Studentdata)
  const [teacher, setteacher]=useState(Teacher)


  return (

<Appcontext.Provider
value={
  {user,setuser ,teacher,setteacher}
  }
>
    
  <div className="App">
    
  <Switch>

<Route exact path="/" >
  <BaseApp></BaseApp>
  </Route>

  <Route path='/student'>
    
    <Student  >
     </Student>
   
   
 </Route>

 <Route path='/addstudents'>
    <Addstudents 
    >
    </Addstudents>
 </Route>

<Route path='/teacher'>
  <TeacherDetail 
 
  ></TeacherDetail>
</Route>

<Route path='/teacheradd'>
    <Addteacherdata 
   
    ></Addteacherdata>
    
</Route>

<Route path='/view/:id'>
  <Viewstudent 
 
  ></Viewstudent>
</Route>


<Route path='/views/:id'>
  <ViewTeacher >
 </ViewTeacher>
</Route>

<Route path='/editstudent/:id'>
  <EditStudent 
 
  ></EditStudent>
</Route>

<Route path='/teacheredit/:id'>
   
<EditTeacher>
  </EditTeacher> 

</Route>
 

</Switch>
    </div>
</Appcontext.Provider>
  );
}

export default App;
