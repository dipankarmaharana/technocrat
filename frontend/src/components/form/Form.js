import React, { useContext, useState } from "react";
import "./form.css"
import axios from "axios";
import ProductContext from "../../store/ProductContext";

const Form = (props) => {
    const ProductCtx = useContext(ProductContext)
    const [resmsg,setresMsg] = useState('');

    const [productName, setProductName] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productPrice, setProductPrice] = useState('')
    
    const productNameHandler = (event)=>{
        setProductName(event.target.value)
    }
    const productImageHandler = (event)=>{
        setProductImage(event.target.value)
    }
    const productPriceHandler = (event)=>{
        setProductPrice(event.target.value)
    }
    const formSubmitHandler=async(event)=>{
        let error=''
        if(productName==='' && error===''){
            error='*Please enter product name'
            setresMsg(error);
        }
        
        if(productPrice==='' && error===''){
            error='*Please enter product price'
            setresMsg(error);
        }

        if(error==='') saveProductData({productName,productImage,productPrice})

        
        // props.onProductAdded(true)
        event.preventDefault();
        
    }

    const [successMsg, setSuccessMsg] = useState('')

    const showText=()=>{
        setSuccessMsg('Item added successfully')
    }

    const saveProductData= async(formdata)=>{
        const product = {
            productname :formdata.productName,
            //node api variable
            productimage :formdata.productImage,
            productprice :formdata.productPrice
        }
        const result = await axios.post("http://localhost:4000/product/add",product,{
            headers:{
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token')
            }
        }) //url used in api to add
        setresMsg('');
        ProductCtx.setProducts([...ProductCtx.products,product])
    }
  return (
    <div>
    <h4>Add Product</h4>
    <div>{resmsg}</div>
    <div className="form-container card col-12 col-lg-4 mt-2 hv-center mx-auto grey">
      <form onSubmit={formSubmitHandler}>
        <div className="form-input form-group text-left">
        <label htmlFor="">Product Name</label>
            <input type="text" className="form-control" placeholder="Product Name" onChange={productNameHandler} />
        </div>
        <div className="form-input form-group text-left">
        <label htmlFor="">Product Image URL</label> 
            <input type="text" className="form-control" placeholder="Product Image URL" onChange={productImageHandler} />
        </div>
        <div className="form-input form-group text-left">
        <label htmlFor="">Product Price</label>
            <input type="text" className="form-control" placeholder="Product Price" onChange={productPriceHandler} />
        </div>
        <div className="form-input form-group text-left d-flex justify-content-center">
            <button className="btn btn-dark text-center" type="submit" onClick={showText}>Add Product</button>
        </div>
        <div>
            {successMsg}
        </div>
      </form>
    </div> 
    </div>
  );
};

export default Form;
