import { BrowserRouter,Routes,Link,Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import CartIcon from "./Components/CartIcon";
import { Header } from "./Components/Header";
import CartStore from "./store/CartStore";
import { ThemeProvider } from "./Context/Theme";
import { Login } from "./pages/Login";
import {AuthProvider,AuthContext} from "./Context/Auth"
import { useContext } from "react";
function App() {

  return (
    
    <div className="container">
      <BrowserRouter>
        <ThemeProvider>
          <Header/>
        </ThemeProvider>
        <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/products" element={<Products/>} exact></Route>
            <Route path="/products/:id" element={<Product/>} exact></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
function AppWithStore(){
  return <Provider store={CartStore}>
    <AuthProvider>
    <App/>
    </AuthProvider>
  
  </Provider>
} 
export default AppWithStore;
