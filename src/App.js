import { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Carts from "./Components/Cart/Carts"
import Cars from "./Components/Cars/Cars"
import Service from "./Components/Service/Service"
import Pay from "./Components/Pay/Pay"
import { commerce } from "./library/commerce";
import {CartContext} from './Context/CreateContext'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error,setError] = useState("");
  const [product,setProduct]=useState([])
const [cart,addToCart] = useState({});

  const fetchData = async()=>{
    const {data} = await commerce.products.list();
    setProduct(data)
  }

  const fetchCart = async ()=>{
    addToCart(await commerce.cart.retrieve())
  }
  const handleAddToCart = async(productID,quantity)=>{
    const {cart} = await commerce.cart.add(productID,quantity);
    addToCart(cart)
  }
  const handleUpdateCart=async(productID,quantity)=>{
    const {cart} = await commerce.cart.update(productID,{quantity});
    addToCart(cart)
  }
  const handleRemoveCart= async(productID)=>{
    const {cart} = await commerce.cart.remove(productID);
    addToCart(cart)
  }
  const handleEmptyToCart = async()=>{
    const {cart} = await commerce.cart.empty();
    addToCart(cart)
  }
  useEffect(()=>{
    fetchData()
    fetchCart()
  },[])
  const totalItem = cart.total_items
  return (
    <>
      {user === "admin" && pass === "admin" ? (
        <CartContext.Provider value={{product ,handleAddToCart,totalItem,cart,handleUpdateCart,handleRemoveCart,handleEmptyToCart}}>
          <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home user = {user} setUser = {setUser} setPass = {setPass}/>}/>
          <Route path="/cars" element={ <Cars />}/>
          <Route path="/cart" element={ <Carts/>}/>
          <Route path="/service" element={ <Service/>}/>
          <Route path="/pay" element={ <Pay/>}/>
           </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      ) : (
        <Login setUser={setUser} user={user} pass={pass} setPass={setPass} error={error} setError={setError}/>
      )}
    </>
  );
}

export default App;
