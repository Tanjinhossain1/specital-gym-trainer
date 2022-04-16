import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Sheard/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Sheard/Footer/Footer';
import AccountabilityCheckedOut from './Pages/Home/AccountabilityCheckedOut/AccountabilityCheckedOut';

function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/accountabilitycheckedout' element={<AccountabilityCheckedOut></AccountabilityCheckedOut>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
