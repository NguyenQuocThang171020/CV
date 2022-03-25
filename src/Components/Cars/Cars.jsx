import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import { CartContext } from "../../Context/CreateContext";
import {AiOutlineShoppingCart} from "react-icons/ai"
import "./cars.css";
import ListCars from "./ListCars"
import {IoMdReturnLeft} from "react-icons/io"
const Cars = () => {
    const {totalItem} = useContext(CartContext)
      const navigate = useNavigate()
      const goHome = ()=>{
          navigate("/")
      }
    
  return (
    <div className="cars-container">
      <div className="navbar-container">
        <div className="logo-return">
            <p onClick={goHome}><IoMdReturnLeft/>Home</p>
        </div>
        <div className="nav-menu">
          <div className="nav2">
          <Link className="icons" to="/cart" >Cart</Link>
          <Link to="/cart" ><AiOutlineShoppingCart className="cart-icon"/></Link>
          </div>
          <div className="nav1">
            <p>{totalItem}</p>
          </div>
        </div>
      </div>
    <div className="list-cars">
      <ListCars/>
    </div>

    </div>
  );
};

export default Cars;
