import amico from '../../assets/gambarlogin/amico/Login-amico.png'
import facebook from '../../assets/gambarlogin/logo/facebook.svg'
import google from '../../assets/gambarlogin/logo/google.svg'
import apple from '../../assets/gambarlogin/logo/apple.svg'
import axios from 'axios'

import './Loginn.css'
import { useState } from 'react'

const Login = () => {

const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const[output, setOutput] = useState([])
console.log(email)
console.log(password)
const handleLogin = async(e) => {
    e.preventDefault()
    const respons = await axios.post("http://localhost:3000/login", {
        email, password 
    })
    setOutput(respons.data)
    console.log(respons.data)
    setEmail('')
    setPassword('')
}

    return (
        <div className="login-container">
            <div className="login-image">
                <img src={amico} alt="" />
            </div>
            <div className="login-form">
                <h2>Masuk Sebagai Pencari</h2>
                <form>
                    <div className="form-group">
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span>Email</span>
                    </div>
                    <div className="form-group">
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span>Password</span>
                        <div id="toggle"></div>
                    </div>
                    <div className="form-options">
                        <label>
                            <input type="checkbox" name="remember" />
                            Remember me
                        </label>
                        <a href="/forgot-password">Lupa Password?</a>
                    </div>
                    <button type="submit" onClick={handleLogin} className="login-button">Masuk</button>
                </form>
                <div className="signup-link">
                    Belum punya akun? <a href="/register">Daftar</a>
                </div>
                <div className="social-login">
                    <p>Or Sign up with</p>
                    <div className="social-buttons">
                        <a href=""><button className="social-button facebook"><img src={facebook} alt="" /></button></a>
                        <button className="social-button google"><img src={google} alt="" /></button>
                        <button className="social-button apple"><img src={apple} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;