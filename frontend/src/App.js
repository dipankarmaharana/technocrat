import "./App.css";
import { useState, useEffect } from "react";
import Product from "./components/product/Product";
import Form from "./components/form/Form";
import Header from "./components/Header/Header";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SignInForm/SigninForm";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import { ProductState } from "./store/ProductState";
import {Routes,Route} from "react-router-dom"
import Adminsignin from "./components/adminsignin/adminsignin";
import { Cart } from "./components/cart/Cart";
import { CartState } from "./store/CartState";
import { AuthState } from "./store/AuthState";
import { ProtectRoute } from "./components/adminsignin/ProtectRoute";

function App() {
  
  return (
    <div className="App">
      
      <ProductState>
      <CartState>
      <AuthState>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route element={<ProtectRoute/>}>
        <Route path="/admin/product/add" element={<Form/>}/> 
        </Route>
        <Route path="/product" element={<ProductList/>}/> 
        <Route path="/signin" element={<SigninForm/>}/> 
        <Route path="/admin/signin" element={<Adminsignin/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        </Routes>
        </AuthState>
        </CartState>
      </ProductState>
    </div>
  );
}

export default App;
