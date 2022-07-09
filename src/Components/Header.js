import React from "react";
import { useContext } from "react";
import { BrowserRouter,Routes,Link,Route } from "react-router-dom";
import CartIcon from "./CartIcon"; 
import {ThemeContext} from "../Context/Theme";
import {AuthContext} from "../Context/Auth";

export function Header(){
    const themContextValue = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    let logout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        authContext.setAuth({});
    }
    let navClasses = themContextValue.theme == "light"? "navbar navbar-expand-lg bg-light" : "navbar  navbar-dark navbar-expand-lg bg-dark";
    return(
        <>
            <nav className={navClasses}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="cart">Cart</Link>
                    </li>
                    {
                       !authContext.auth.email ?
                       

                        <li className="nav-item">
                        <Link className="nav-link" to="login">Login</Link>
                        </li> : ""
                    }
                   
                    <li className="nav-item">
                        <button  className="btn btn-outline-success my-2 my-sm-0"  onClick={themContextValue.toggleTheme}>Switch Theme</button>
                    </li>
                </ul>
                {
                    authContext.auth.email ?
                    
                <span className="navbar-text" > {authContext.auth.email + " "}
                    <button  className="btn btn-outline-success my-2 my-sm-0"  onClick={logout}>Logout</button>
                </span>:""
            }
                  
      
          
                </div>
                <CartIcon/>
            </div>
            
            </nav>
        </> 
    )
}