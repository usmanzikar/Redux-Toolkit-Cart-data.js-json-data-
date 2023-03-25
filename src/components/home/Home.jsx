import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice';
import './home.css';
import toast,{Toaster} from 'react-hot-toast';
import {Link} from 'react-router-dom'



const Home = () => {

  const dispatch = useDispatch();

  const items = useSelector((state)=>state.allCart.items);

  const addcart = (products) =>{
    dispatch(addToCart(products))
    toast.success("Added To Cart");

  }

  return (
    <div className="container">
    <h1>Products</h1>
    <div className="row">
      {items.map((products)=>{
        const {id,price,title,category,images} = products;
        return(
          <div key={id} className='card'>
            <Link to={`/productdetail/${products.id}`}>
            <img src={images.slice(1,2)} alt="image1"  />
            <h2>{title}</h2>
            <span>${price}</span>
            <p>{category}</p>   </Link> 
            <button className="card-btn" onClick={()=>addcart(products)}>Add To Cart</button>
            <Toaster />
          </div>
        )
      })}
    </div>
   
    
    </div>
  )
}

export default Home;