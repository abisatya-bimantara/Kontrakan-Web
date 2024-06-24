import { useState } from "react";
import amico from "../../assets/gambarlogin/amico/Login-amico.png";
import google from "../../assets/gambarlogin/logo/google.svg";
import facebook from "../../assets/gambarlogin/logo/facebook.svg";
import apple from "../../assets/gambarlogin/logo/apple.svg";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState(null);
  const [userData, setUserData] = useState("");
  console.log(password, confPassword);

  const Register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        phone_number: phone_number,
        address: address,
        password: password,
        confPassword: confPassword,
      });
      setUserData(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="container">
      <div className="login-image">
        <img src={amico} alt="" />
      </div>
      <div className="register-form">
        <h2>Daftar Sebagai Pencari</h2>
        <form onSubmit={Register}>
          <div className="input-group">
            <input type="text" required id="nama" value={name} onChange={(e) => setName(e.target.value)} />
            <span>Nama</span>
          </div>
          <div className="input-group">
            <input type="email" required id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span>Email</span>
            <input className="spasi" type="text" required id="phone_number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
            <span className="spasi-nomer">Phone Number</span>
          </div>
          <div className="input-group">
            <input type="text" required id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <span>Address</span>
          </div>
          <div className="input-group">
            <input type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <span>Password</span>
          </div>
          <div className="input-group">
            <input type="password" required id="confPassword" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
            <span>Confirm Password</span>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to all the Terms and Privacy Policies</label>
          </div>
          <button type="submit" onClick={Register} className="daftar-btn">
            Daftar
          </button>
          <p>
            Sudah punya akun? <a href="#">Masuk</a>
          </p>
          <div className="social-register">
            <p>Or Sign up with</p>
            <div className="social-buttons">
              <a href="#">
                <button className="social-button facebook">
                  <img src={facebook} alt="Facebook" />
                </button>
              </a>
              <a href="#">
                <button className="social-button google">
                  <img src={google} alt="Google" />
                </button>
              </a>
              <a href="#">
                <button className="social-button apple">
                  <img src={apple} alt="Apple" />
                </button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;