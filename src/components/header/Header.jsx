import React from 'react';
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import { getCartTotal } from "../../store/CartSlice";


const Header = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="Header">
      <nav>
        <div className="logo">
          <Link to={"/"}>SH Cart</Link>
        </div>
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Products</Link>
          <Link to={"/cart"}>
            <FiShoppingBag />
            <p>{totalQuantity}</p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header