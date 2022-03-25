import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CreateContext";
import "./cart.css";
import Footer from "../Footer/Footer"
import {IoMdReturnLeft} from "react-icons/io"
import {GiClick} from "react-icons/gi"
const Carts = () => {
  const { cart, handleUpdateCart, handleRemoveCart, handleEmptyToCart } =
    useContext(CartContext);
  const empty = cart.line_items.length === 0;
  const navigate = useNavigate();
  const hanldeHome = () => {
    navigate("/");
  };
  return (
    <div className="cart-container">
      <div className="home">
        <p onClick={hanldeHome}><IoMdReturnLeft/>Home</p>
      </div>
      <div className="title-logo">
        <h2>Products That You Have Purchased : </h2>
      </div>
      {empty ? (
        <div className="empty">
          <h3>Your orders is empty</h3>
          <Link className="buy-cars" to="/cars"><GiClick/> Buy Cars</Link>
        </div>
      ) : (
        <div className="carts">
          {cart.line_items.map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                 <div className="image">
                  <img className="image-icon" src={item.image.url} alt={item.name} />
                </div>
                <div className="infomation-carts">
                <div className="infomation-cart">
                  <div className="name">
                      <p>{item.name}</p>
                  </div>
                  <div className="quantity">
                  <button
                    className="subtract"
                    onClick={() => handleUpdateCart(item.id, item.quantity - 1)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="added"
                    onClick={() => handleUpdateCart(item.id, item.quantity + 1)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div className="total-item">
                  <p className="total-price">Total : <span>{item.line_total.formatted_with_code}</span></p>
                </div>
                </div>
                </div>
                <div className="btn-remove">
                  <button
                    className="remove-item"
                    onClick={() => handleRemoveCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="sum-total">
        <h3 className="sum">SUM : <span>{cart.subtotal.formatted_with_code}</span></h3>
      </div>
      {empty ? (
        <></>
      ) : (
        <div className="btn-pay">
          <Link to="/pay">
            <button className="pay"> PAY </button>
          </Link>
          <button className="return" onClick={handleEmptyToCart}>
            CLEAR
          </button>
        </div>
      )}
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Carts;
