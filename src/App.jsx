import React from 'react'
import './App.css'
import Header from './components/header/Header'; 
import Home from './components/home/Home';
// import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ProductDetail from './components/productdetails/ProductDetail';

function App() {

  return (
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productdetail/:productId' element={<ProductDetail/>}/>
    </Routes>
    {/* <Footer/> */}
  </Router>
  )
}

export default App
