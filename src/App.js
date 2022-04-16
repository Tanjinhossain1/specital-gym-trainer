import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Sheard/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Sheard/Footer/Footer';
import AccountabilityCheckedOut from './Pages/Home/AccountabilityCheckedOut/AccountabilityCheckedOut';
import FastTrackDetail from './Pages/Home/FastTrackDetail/FastTrackDetail';
import UltimateDetail from './Pages/Home/UltimateDetail/UltimateDetail';
import LifeTransformCheckout from './Pages/Home/LifeTransformCheckout/LifeTransformCheckout';

function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/accountAbilityCheckout' element={<AccountabilityCheckedOut></AccountabilityCheckedOut>}></Route>
        <Route path='/fastTrackDetail' element={<FastTrackDetail></FastTrackDetail>}></Route>
        <Route path='/ultimateDetail' element={<UltimateDetail></UltimateDetail>}></Route>
        <Route path='/lifeTransformCheckout' element={<LifeTransformCheckout></LifeTransformCheckout>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
