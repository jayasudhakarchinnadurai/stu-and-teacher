
import { useState } from 'react';
import './App.css';
import { Studentdata } from './Data/studentdata.js';
import Student from './Student/studetail';
import BaseApp from './Data/base.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Addstudents from './Student/Addstu.js';
import { Teacher } from './Data/Teacherdata.js';
import AddTeacher from './Teacher/AddTeach';
function App() {
  const [user, setuser]=useState(Studentdata)
  const [teacher, setteacher]=useState(Teacher)
  return (
    <div className="App">
      
<Switch>
    <Route extact path="/student">
    <BaseApp></BaseApp>
    </Route>
    <Route extact path="/add">
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

 <Route extact path='/'>
  <AddTeacher
  teacher={teacher}
  setteacher={setteacher}
  
  ></AddTeacher>
 </Route>


</Switch>
    </div>
  );
}

export default App;
