import React, { useContext, useEffect } from 'react'
import { CartItem } from '../CartItem/CartItem'
import CartContext from '../../store/CartContext'


export const Cart = () => {
    const CartCtx = useContext(CartContext)
    
  return (
    <div className='container'>
    <div className="cart-box mx-auto m-4">
    <h4>your cart</h4>
    {CartCtx.cartItems.map((item,index)=>
        <CartItem productname={item.productname} productprice={item.productprice} qty={item.qty} key= {index}/>
    )}
        
    </div>
    </div>
  )
}
