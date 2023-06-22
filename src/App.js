
import { useState } from 'react';
import './App.css';
import { Studentdata } from './Data/studentdata.js';
import Student from './Student/studetail';
import BaseApp from './Data/base.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Addstudents from './Student/Addstu.js';
import { Teacher } from './Data/Teacherdata.js';
import AddTeacher from './Teacher/teacherdetail.js';
import Addteacherdata from './Teacher/AddTeacher.js';
function App() {
  const [user, setuser]=useState(Studentdata)
  const [teacher, setteacher]=useState(Teacher)
  return (
    <div className="App">
      
<Switch>
<Route extact path="/">
    <BaseApp></BaseApp>
    </Route>

<Route extact path='/teacher'>
  <AddTeacher
  teacher={teacher}
  setteacher={setteacher}
  ></AddTeacher>
</Route>






<Route>
  <Addteacherdata 
  extact path='/teachers'
  
  teacher={teacher}
  setteacher={setteacher}></Addteacherdata>
  </Route>
  




    

    <Route extact path="/addstu">
      <Addstudents 
      user={user}
      setuser={setuser}
      ></Addstudents>
    </Route>

<Route>
    <Student extact path="/data"
    user={user}
    setuser={setuser}
     ></Student>
 </Route>

 
</Switch>
    </div>
  );
}

export default App;
