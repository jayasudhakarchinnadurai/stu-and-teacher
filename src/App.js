
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
function App() {
  const [user, setuser]=useState(Studentdata)
  const [teacher, setteacher]=useState(Teacher)
  return (
    <div className="App">
      
<Switch>

<Route exact path="/" >
  <BaseApp></BaseApp>
  </Route>

  <Route path='/student'>
    <Student user={user} 
    setuser={setuser}>
     </Student>
 </Route>

 <Route path='/addstudents'>
    <Addstudents 
     user={user}
     setuser={setuser}>
    </Addstudents>
 </Route>

<Route path='/teacher'>
  <TeacherDetail 
  teacher={teacher}
  setteacher={setteacher}
  ></TeacherDetail>
</Route>

<Route path='/teacheradd'>
    <Addteacherdata 
    teacher={teacher}
    setteacher={setteacher}
    ></Addteacherdata>
    
</Route>

<Route path='/view/:id'>
  <Viewstudent 
  user={user}
  ></Viewstudent>
</Route>


<Route path='/views/:id'>
  <ViewTeacher teacher={teacher}>
 </ViewTeacher>
</Route>

<Route path='/editstudent/:id'>
  <EditStudent 
  user={user}
  setuser={setteacher}
  ></EditStudent>
</Route>
 
</Switch>
    </div>
  );
}

export default App;
