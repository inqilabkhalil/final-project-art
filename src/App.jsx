
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shopcategory from './pages/Shopcategory/Shopcategory';
import Productdetails from './pages/Productdetails/Productdetails';
import Productcheckout from './pages/Productcheckout/Productcheckout';
import Contact from './pages/Contact/Contact'
import Confirmation from './pages/Confirmation/Confirmation';
import Shopping from './pages/Shoppingcart/Shopping';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shopcategory' element={<Shopcategory/>}></Route>
      <Route path='/productdetails' element={<Productdetails/>}></Route>
      <Route path='/productcheckout' element={<Productcheckout></Productcheckout>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/confirmation' element={<Confirmation></Confirmation>}></Route>
      <Route path='/shoppingcart' element={<Shopping/>}></Route>
    </Routes>
  );
}

export default App;
