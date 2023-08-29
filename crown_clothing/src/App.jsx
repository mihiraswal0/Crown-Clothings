import React from 'react'
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter,Route,Routes,Redirect,Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const App = () => {
  const user=useSelector(state=>state.user.currentUser);
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/products/" element={<ProductList/>}/>

        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={user?<Home/>:<Login/>
      }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App