import React, { useContext, useEffect } from 'react'
import ProductContext from '../../store/ProductContext'
import Product from '../product/Product'

const ProductList = (props) => {

    const ProductCtx = useContext(ProductContext);
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts=async()=>{
        const data = await fetch("http://localhost:4000/product")
        const products_data = await data.json()
        console.log(products_data.result)
        ProductCtx.setProducts(products_data.result)
      }
  return (
    <div>
        <h3>trending products</h3>
      {ProductCtx.products.map((product,index) => (
        <Product
          key={index}
          productname={product.productname}
          productprice={product.productprice}
          productimage={product.productimage}
        />
      ))}
    </div>
  )
}

export default ProductList