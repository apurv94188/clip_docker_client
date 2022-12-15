import './App.css';
import {ClipSearch, ClipAdd} from './common_ele.js'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Landing} from './screens/landing'
import { useEffect, useState } from 'react';
import Signup from './screens/signup';
// what should I want to place, and where shoudl I place
// ReactDOM(<h2>Hello</h2>, document.getElementById('root'))


function App() {
  
  function buttonHandler(t_props) {
    console.log('something got clicked');
  }
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = localStorage.getItem("user");
    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser))
    }

  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element = {user?.email ? <Navigate to="/home" /> : <Landing />} 
          />
          <Route path='/signup'
            element = {user?.email ? <Navigate to="/home" /> : <Signup />}
          />
          {/* <Route path='/login'
            element = {user?.email ? <Navigate to="/home" /> : <Login />}
          />
          <Route path='/home'
            element = {user?.email ? <Home user={user}/> : <Navigate to="/" />}
          /> */}
        </Routes>
      
      </BrowserRouter>
      <ClipSearch submitHandler={buttonHandler}/>
      <ClipAdd submitHandler={buttonHandler}/>
      
    </div>
    

  );
}

export default App;
