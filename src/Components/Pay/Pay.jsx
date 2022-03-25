import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CreateContext";
import "./pay.css"
const Pay = () => {
    const [modal, setModal] = useState(false);
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const {cart,handleEmptyToCart}=useContext(CartContext)
    const navigate = useNavigate();
    const handleConfirm = ()=>{
        setModal(!modal);
    }
    const handleReturn =()=>{
        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
        handleEmptyToCart()
        setModal(!modal);
    }
    const handleHome = ()=>{
      navigate("/")
    }
    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    return ( 
        <div className="pay-container">
            <div className="title-logo">
                <h2>Please confirm your order </h2>
            </div>
            <form>
                <label> Name : </label>
                <input type="text" placeholder="name ..." required onChange={(e)=>setName(e.target.value)} value={name}/>
                <label> Email : </label>
                <input type="email" placeholder="email ..."required onChange={(e)=>setEmail(e.target.value)}  value={email}/>
                <label> Phone : </label>
                <input type="text" placeholder="phone ..."required onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                <label> Address : </label>
                <input type="text" placeholder="address ..."required onChange={(e)=>setAddress(e.target.value)} value={address} />
            </form>
            <div className="sum-total">
                 <h3 className="sum">SUM TOTAL: <span>{cart.subtotal.formatted_with_code}</span></h3>
             </div>
             <div className="confirm-form">
               <div>
               {(name ==="" || email==="" || phone ==="" || address ==="")
              ?(
                <input type="text" className="confirm-disable" disabled value="Confirm"/>
              ):(
                <button className="confirm" onClick={handleConfirm}>Confirm</button>
              )}
               
               </div>
            <div>
                <button className="confirm" onClick={handleHome}> Home </button>
            </div>
            
               </div>
             {modal && (
        <div className="modal">
          <div onClick={handleConfirm} className="overlay"></div>
          <div className="modal-content">
            <h2 className="notice">Notice</h2>
            {(name !=="" || email!=="" || phone !=="" || address !=="")?(
              <div className="info-form">
                <p>Name    : <span>{name}</span></p> 
                <p>Email   : <span>{email}</span></p>
                <p>Phone   : <span>{phone}</span></p>
                <p>Address : <span>{address}</span></p>
                <p>Total : <span>{cart.subtotal.formatted_with_code}</span></p>
                <h2 className="notice-form">Your order has been successfully placed</h2>
                <div className="thanks">Thank you</div>
            </div>
            ):(
              <h2 className="notice-form">Please fill in all the information</h2>
            )}
            
            <button className="close-modal" onClick={handleReturn}>
              x
            </button>
          </div>
        </div>
      )}
        </div>
     );
}
 
export default Pay;
