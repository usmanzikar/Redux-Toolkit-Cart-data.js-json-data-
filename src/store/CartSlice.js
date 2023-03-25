import { createSlice } from "@reduxjs/toolkit";
import Data from '../Data';

const initialState = {
    cart:[],
    items:Data,
    totalPrice:0,
    totalQuantity:0,
}

const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart(state,action ){
            const hello = action.payload;
            let isItemExist = state.cart.findIndex((products)=> products.id === hello.id)
            if(isItemExist >= 0){
                state.cart[isItemExist].quantity+=1;
            }
            else{
            state.cart.push(hello)
            }
        },
        removeallproducts(state, action) {
            return []
          },
    
    
        increment(state, action) {
            const item = state.cart.find((products)=> products.id === action.payload.id)
            item.quantity+=1
        },
        decrement(state, action) {
            const item = state.cart.find((products) => products.id === action.payload.id);
          if (item.quantity === 1) {
            item.quantity = 1
          } else {
            item.quantity-=1;
          }
        },
    
        removeproduct (state, action) {
            state.cart = state.cart.filter((products) => products.id !== action.payload);
        },
        getCartTotal: (state) => {
          let { totalQuantity, totalPrice } = state.cart.reduce(
            (cartTotal, cartItem) => {
              console.log("carttotal", cartTotal);
              console.log("cartitem", cartItem);
              const { price, quantity } = cartItem;
              console.log(price, quantity);
              const itemTotal = price * quantity;
              cartTotal.totalPrice += itemTotal;
              cartTotal.totalQuantity += quantity;
              return cartTotal;
            },
            {
              totalPrice: 0,
              totalQuantity: 0,
            }
          );
          state.totalPrice = parseInt(totalPrice.toFixed(2));
          state.totalQuantity = totalQuantity;
        },
    }
})

export default CartSlice.reducer;

export const {addToCart,removeallproducts,removeproduct,increment,decrement,getCartTotal} = CartSlice.actions;