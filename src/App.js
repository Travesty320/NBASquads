import React from 'react'
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import PointGuards from './views/PointGuards';
import ShootingGuards from './views/ShootingGuards';
import SmallForwards from './views/SmallForwards';
import PowerForwards from './views/PowerForwards';
import Centers from './views/Centers';
import Squad from './views/Squad';


function App() {
  return (
    <Router>
        <Nav />
        <div> 
         
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/pointguards' element={<PointGuards />} />
              <Route path='/shootingguards' element={<ShootingGuards />} />
              <Route path='/smallforwards' element={<SmallForwards />} />
              <Route path='/powerforwards' element={<PowerForwards />} />
              <Route path='/centers' element={<Centers />} />
              <Route path='/squad' element={<Squad />} />
            </Routes>
            
        </div>
    </Router>
  );
}

export default App;
