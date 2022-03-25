import {Link} from "react-router-dom"
import "./navbar.css"
import {BsCartPlusFill} from "react-icons/bs"
import {FaMotorcycle} from "react-icons/fa"
import {ImHome} from "react-icons/im"
import  {FcServices} from "react-icons/fc"
const Navbar = () => {
    return ( 
        <nav>
            <Link className="nav" to="/">Home</Link>
            <Link className="nav" to="/cars">Cars</Link>
            <Link className="nav" to="/cart">Cart</Link>
            <Link className="nav" to="/service">Service</Link>
            <div className="icon-fixed">
            <Link to="/"><ImHome className="icon1"/></Link>
            <Link to="/cars"><FaMotorcycle className="icon2"/></Link>
            <Link to="/cart"><BsCartPlusFill className="icon3"/></Link>
            <Link  to="/service"><FcServices className="icon"/></Link>           
            </div>
        </nav>
     );
}
 
export default Navbar;