import { useContext } from "react";
import { CartContext } from "../../Context/CreateContext";
import "./cars.css"
import Footer from "../Footer/Footer"
const ListCars = () => {
    const {product,handleAddToCart} = useContext(CartContext)
    return ( 
        <>
        <div className="list-car">
            {product.map((car)=>{
                return(
                    <div className="cart" key={car.id}>
                        <div className="images">
                            <img className="image" src={car.image.url} alt={car.name} />
                        </div>
                        <div className="info">
                            <div className="name">
                                <p>{car.name}</p>
                            </div>
                            <div className="price">
                                <p>{car.price.formatted_with_code}</p>
                            </div>
                        </div>
                        <div className="btn-add" >
                               <button className="add" onClick={()=>handleAddToCart(car.id,1)}> BUY </button>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="footer">
                <Footer/>
        </div>  
        </>
     );
}
 
export default ListCars;