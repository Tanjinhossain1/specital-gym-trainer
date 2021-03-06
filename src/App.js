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
import SignUp from './Pages/Login/SignUp/SignUp';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/accountAbilityCheckout' element={
          <RequireAuth>
            <AccountabilityCheckedOut></AccountabilityCheckedOut>
          </RequireAuth>
        }></Route>

        <Route path='/fastTrackDetail' element={
          <RequireAuth>
            <FastTrackDetail></FastTrackDetail>
          </RequireAuth>
        }></Route>

        <Route path='/ultimateDetail' element={<RequireAuth>
          <UltimateDetail></UltimateDetail>
        </RequireAuth>}></Route>

        <Route path='/lifeTransformCheckout' element={
          <RequireAuth>
            <LifeTransformCheckout></LifeTransformCheckout>
          </RequireAuth>
        }></Route>
  <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
