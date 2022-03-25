import { useNavigate } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";
import Repair from "../../assets/repair.jpg"
import Transport from "../../assets/transport.jpg"
import Policy from "../../assets/policy.jpg"
import A2 from "../../assets/A2.jpeg"
import Footer from "../Footer/Footer"
import "./service.css";
const Service = () => {
  const navigate = useNavigate();
  const hanldeHome = () => {
    navigate("/");
  };
  return (
    <div className="service-container">
      <div className="home">
        <p onClick={hanldeHome}>
          <IoMdReturnLeft />
          Home
        </p>
      </div>
      <div className="title-logo">
        <h2>My Services : </h2>
      </div>

      <div className="my-services">
            <div className="update">
                <img className="repair" src={Repair} alt="" />
                <p className="title-repair"> Repair - Upgrade - Refurbish Motorbikes</p>
                <button className="detail">Detail</button>
            </div>
            <div className="transport ">
                <img className="repair" src={Transport} alt="" />
                <p className="title-repair">Vehicle Rescue And Transport Services</p>
                <button className="detail">Detail</button>
            </div>
            <div className="policy">
                <img className="repair" src={Policy} alt="" />
                <p className="title-repair"> Support Policy Of Installment Payment 0% Interest </p>
                <button className="detail">Detail</button>
            </div>
            <div className="a2">
                <img className="repair" src={A2} alt="" />
                <p className="title-repair">Support For A2 Driver's License Exam With Simple Procedures</p>
                <button className="detail">Detail</button>
            </div>
      </div>
      <div className="footer">
    <Footer/>
  </div>
    </div>
   
  );
};

export default Service;
