import React, { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {MdDelete} from 'react-icons/md';
import './cart.css';
import { removeproduct,increment, decrement,getCartTotal } from "../../store/CartSlice";
import toast,{Toaster} from 'react-hot-toast';

const Cart = () => {

  const dispatch = useDispatch();
  const {cart,totalQuantity,totalPrice} = useSelector((state) => state.allCart)

  const removeCartProduct =(products) =>{
    dispatch(removeproduct(products))
    toast.error('Product Remove From Cart')
  }
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


  
  return (
    <div className="cart">
    <h1>Here all your Cart Products</h1>
    <div className="cart-itemheading">
      <h3>Item</h3>
      <h3>Price</h3>
      <h3>Quantity</h3>
      <h3>Total</h3>
      <h3>{''}</h3>
    </div>
    {cart && cart.map((products) => {
      const { id,price, title, images } = products;
      return (
        <>
        <div key={products.id} className="cart-products">
          <div className="cart-img">
            <img src={images.slice(1,2)} alt="image1" />

            <h2>{title}</h2>
          </div>
          <div className="cart-price">
            <span>${price*products.id}</span>
          </div>

          <div className="cart-btns" key={id}>
            <div className="cart-decre" onClick={()=>dispatch(decrement(products)) } >-</div>
            <Toaster/>
            <p onChange={()=>null}>{products.id}</p>
            <div className="cart-incre" onClick={()=>dispatch(increment(products))}>+</div>
            <Toaster/>
          </div>
          <div className="cart-total">
            <span>${price*products.id}</span>
          </div>
          <div className="single-userdel" onClick={()=>removeCartProduct(products.id)}><MdDelete/></div>
          <Toaster/>
        </div>
       
        </>
      );
    })}
    <aside>
    <div className="order-summary">
      <h2>TotalQuantity : <label>{totalQuantity
      }</label></h2>
      <h2>Subtotal : <label>${totalPrice}</label></h2>
      <h3 className='total'>
        <label>Total</label>
        <label>${totalPrice}</label>
        </h3>
    </div>
    <button className='checkout' onClick={()=> (toast.success('This Option Comming Soon'))}>CHECKOUT</button>
    <Toaster/>
    </aside>
       {/* <button className="clear-cart" onClick={()=>dispatch(removeallproducts())}  >Clear Cart</button> */}

  </div>
  )
}

export default Cart