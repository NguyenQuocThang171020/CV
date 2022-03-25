
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {FaRegCopyright} from "react-icons/fa"
import {GiRotaryPhone} from "react-icons/gi"
import {AiOutlineGlobal} from "react-icons/ai"
import {FiMail} from "react-icons/fi"
import {GiClockwork} from "react-icons/gi"
import {GiPositionMarker} from "react-icons/gi"
import { Link } from "react-router-dom";

import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="title-logo">
         <p> NQT SHOP</p>
      </div>
      <div className="footer-container">
        <div className="infomation">
            <div className="title-part">NQT SHOP</div>
          <p><GiPositionMarker/> Address : LongAn  VN</p>
          <p><FiMail/> Email:nagi.kusan1234@gmail.com </p>
          <p><GiRotaryPhone/> Phone : +84 111 111 111</p>
          <p><AiOutlineGlobal/> Website : nqtshop2022.netlify.app</p>
          <p><GiClockwork/> Operation : 8:00 AM to 8:00 PM</p>
        </div>
        <div className="service">
            <div className="title-part">SERVICES</div>
          <Link className="link" to="/">  Home </Link> <br />
          <Link className="link" to="/cars"> Cars </Link><br />
          <Link className="link" to="/cart"> Cart </Link><br />
          <Link className="link" to="/service"> Service </Link>
        </div>
        <div className="contact">
            <div className="title-part">CONTACT</div> 
         <div className="icon-contact">
         <a href="facebook.com"><BsFacebook className="contact-icon1" /></a> <br />
          <a href="youtube.com"><BsYoutube className="contact-icon2"/></a><br />
          <a href="https://twitter.com/"><BsTwitter className="contact-icon3"/></a><br />
         </div>
        </div>
      </div>
      <div className="copy-right">
            <p><span><FaRegCopyright/> Copy Right </span> 2022 Thang VN , Inc.All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
