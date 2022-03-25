import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import "./login.css";
import logo from '../../assets/logo.png'
const Login = (props) => {
  const { setUser, setPass, error, setError, user, pass } = props;
  const [detail, setDetail] = useState({ name: "", pass: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(detail.name);
    setPass(detail.pass);
    setDetail({ name: "", pass: "" });
  };

  return (
    <div className="login-container">
      <div className="blur">
        <div className="login-title">
          <p>Motorbike Buying And Selling Service</p>
        </div>
        <div className="image-logo">
          <img src={logo} alt="logo" />
        </div>
        {(user !== "admin" && user !== "") || (pass !== "admin" && pass !== "")
          ? setError("Tài khoản : admin , Mật khẩu : admin")
          : setError("")}
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h1>Login</h1>
          </div>
          <div className="body-form">
            <input
              type="text"
              placeholder="Username..."
              autoFocus
              onChange={(e) => setDetail({ ...detail, name: e.target.value })}
              value={detail.name}
            />
            <FaUser className="icons" />
            <div className="body-form">
              <input
                type="password"
                placeholder="Password..."
                onChange={(e) => setDetail({ ...detail, pass: e.target.value })}
                value={detail.pass}
              />
              <RiLockPasswordLine  className="icons"/>
            </div>
            <div className="btn-form">
              <button className="btn-login">Login</button>
              <IoIosLogIn  className="icons"/>
            </div>
          </div>
        </form>
        <div className="error">
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
