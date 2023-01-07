import React from 'react';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import HomePage from './Pages/DashboardScreens/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import MyContracts from './Pages/DashboardScreens/MyContractsPage';
import RecivedContract from './Pages/DashboardScreens/RecivedContractPage';
import ContractItems from './components/auth/Main/Contract/ContractItems';
import ContactView from './components/auth/Main/Contract/ShowContract/ContactView';
import ContractEdit from './components/auth/Main/Contract/ShowContract/ContractEdit';
import CreateRemark from './components/auth/Main/Contract/ShowContract/CreateRemark';
import ViewRemark from './components/auth/Main/Contract/ShowContract/ViewRemark';

function App() {
  return (
    <div className='app'>
      
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>
        <Route path= "/signup" element={<SignUpPage/>}/>
        <Route path= "/home" element={<HomePage/>}/>
        <Route path= "/my_contracts" element={<MyContracts/>}/>
        <Route path= "/recived_contracts" element={<RecivedContract/>}/>
        <Route path= "/contract_items" element={<ContractItems/>}/>
        <Route path= "/view_contract/:id" element={<ContactView/>}/>
        <Route path= "/edit_contract/:id" element={<ContractEdit/>}/>
        <Route path= "/remark_contract/:id" element={<CreateRemark/>}/>
        <Route path= "/view_remark_contract/:id" element={<ViewRemark/>}/>
      </Routes>
    </div>
  );
}

export default App;
