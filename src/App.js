import React from 'react';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import HomePage from './Pages/DashboardScreens/HomePage';
import LoginPage from './Pages/LoginPage';
import SingUpPage from './Pages/SingUpPage';
import MyContracts from './Pages/DashboardScreens/MyContractsPage';

function App() {
  return (
    <div className='app'>
      
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>
        <Route path= "/home" element={<HomePage/>}/>
        <Route path= "/singup" element={<SingUpPage/>}/>
        <Route path= "/my_contracts" element={<MyContracts/>}/>
      </Routes>
    </div>
  );
}

export default App;
