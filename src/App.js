import React from 'react';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import HomePage from './Pages/DashboardScreens/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import MyContracts from './Pages/DashboardScreens/MyContractsPage';
import ContractItems from './components/auth/Main/Contract/ContractItems';

function App() {
  return (
    <div className='app'>
      
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>
        <Route path= "/home" element={<HomePage/>}/>
        <Route path= "/signup" element={<SignUpPage/>}/>
        <Route path= "/my_contracts" element={<MyContracts/>}/>
        <Route path= "/contract_items" element={<ContractItems/>}/>
      </Routes>
    </div>
  );
}

export default App;
