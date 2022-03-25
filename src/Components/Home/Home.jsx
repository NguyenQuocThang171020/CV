import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"
import slide1 from "../../assets/logo1.jpg"
import slide2 from "../../assets/logo2.jpg"
import slide3 from "../../assets/logo3.jpg"
import slide4 from "../../assets/logo4.jpg"
import slide5 from "../../assets/logo5.jpg"
import slide6 from "../../assets/logo6.jpg"
import slide7 from "../../assets/logo7.png"
import slide8 from "../../assets/logo8.jpg"
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "./home.css";
const Home = (props) => {
  const { user, setUser, setPasss } = props;
  const handleLogout = () => {
    setUser("");
    setPasss("");
  };
  SwiperCore.use([Autoplay]);
  return (
    <div className="home-container">
      {/*header*/}
      <div className="header">
        <div className="logo">
          <Link to="/">Motobike<span>Shop</span></Link>
        </div>
        <div className="navbar-container">
          <div className="navbar">
          <Navbar />
          </div>
          <div className="user">
          <button className="logout" onClick={handleLogout}>
          <strong>{user}</strong>
          </button>
          </div>
        </div>
      </div>
      {/*content*/}
      <div className="content">
        <Swiper
          loop={true}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        >
          <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>

        </Swiper>
      </div>
      {/*footer*/}
      <div className="footer">
          <Footer/>
      </div>
    </div>
  );
};

export default Home;
