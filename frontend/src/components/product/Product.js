import React, { useContext } from 'react'
import "./product.css";
import "./product.scss"
import "./button.js"
import CartContext from '../../store/CartContext';

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const buyNowHandler = ()=>{
    const cartObj = {
      productname:props.productname,
      qty:1,
      productprice:props.productprice
    }

    let CartItems = [...cartCtx.cartItems];
    CartItems = CartItems.filter(cartitem=>cartitem.productname===props.productname)
    if(CartItems.length >0){
      CartItems[0].qty = CartItems[0].qty +1;
    }else{
      cartCtx.setCartItems([...cartCtx.cartItems,cartObj])
    }
  }
  return (
    <div>
        <div className="product_container">
            <div className="product_image">
                <img src={props.productimage} alt='' />
            </div>
            <div className="product_title">{props.productname}</div>
            <div className="product_price">{props.productprice} INR</div>
            <div><button className='button buynow' onClick={buyNowHandler}>
    <span>Add to cart</span>
    <div class="cart">
        <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
    </div>
</button></div>
        </div>
    </div>
  )
}

export default Product