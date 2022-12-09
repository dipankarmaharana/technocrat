import { useContext, useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../../store/AuthContext";
import CartContext from "../../store/CartContext";

const Navbar = () => {
    const AuthCtx = useContext(AuthContext);
    const CartCtx = useContext(CartContext);
    const navigate = useNavigate();

    const [noOfItems,setNoOfItems] = useState(0);
    useEffect(()=>{
        setNoOfItems(CartCtx.cartItems.length)
    },[CartCtx.cartItems]);

    const onLogoutHandler = ()=>{
        localStorage.removeItem('token')
        AuthCtx.setIsLoggedIn(false)
        navigate('/admin/signin');
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/"><b>technocrat.</b></Link>
  
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      { !localStorage.getItem('token') ? 
        <Link className="nav-link" to="/admin/signin">login</Link> :
        <a className="nav-link" onClick={onLogoutHandler} href>logout</a>
      }
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="admin/product/add">add product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="">about</Link>
      </li>
    </ul>
    <span className="navbar-text">
      <Link to="/cart">cart <span class="badge badge-light">{noOfItems}</span></Link>
    </span>
  </div>
</nav>
  );
};

export default Navbar;