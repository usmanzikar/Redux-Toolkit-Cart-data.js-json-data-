import React from 'react';
import './productDetail.css';
// import { useSelector,useDispatch } from 'react-redux';
// import { addToCart } from '../../store/CartSlice';
// import toast,{Toaster} from 'react-hot-toast';
import {useParams} from "react-router-dom";
import Data from '../../Data';


const ProductDetail = () => {

  // const dispatch = useDispatch();

  // const items = useSelector((state)=>state.allCart.items);

  // const addcart = (products) =>{
  //   dispatch(addToCart(products))
  //   toast.success("Added To Cart");
  // }

  const {productId} = useParams()
  const thisProduct = Data.find(products => products.id === productId)
  return (
    <div className='Product-Detail'>
      <h1>this is product detail page </h1>
      <p>Price: ${thisProduct}</p> // detail page rehta hja 
    </div>
  )
}

export default ProductDetail