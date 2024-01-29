import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import One from './one/one';
import Phone from './page/phone/phone';
import Laptop from './page/laptop/Laptop';
import Shop from './page/shop/Shop';
import { ShopContextProvider } from './contex/Contex';
import Login from './page/login/Login';
import P from './P';
import Navbar from './navbar/navbar';
import ArticlePage from './one/ArticlePage';

function App() {
  return (
<>
<div dir='rtl'>
<ShopContextProvider>
  <Navbar/>
<Routes>
  <Route path='/' element={<One/>}/>
  <Route path='/phone' element={<Phone/>}/>
  <Route path='/laptop' element={<Laptop/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/p' element={<P/>}/>
  <Route path='/article/:id' element={<ArticlePage/>}/>
</Routes>

</ShopContextProvider>
</div>
</>
  );
}

export default App;
