
import { useState } from 'react';
import './App.css';
import { Studentdata } from './Data/studentdata.js';
import Student from './Student/studetail';
import BaseApp from './Data/base.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
function App() {
  const [user, setuser]=useState(Studentdata)
  return (
    <div className="App">
      
<Switch>
    <Route extact path="/student">
    <BaseApp></BaseApp>
    </Route>

<Route>
    <Student extact path="/"
    user={user}
    setuser={setuser}
     ></Student>
 </Route>


</Switch>
    </div>
  );
}

export default App;
