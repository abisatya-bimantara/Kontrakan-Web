import { useState } from 'react'
import logo from '../assets/image/logoKontrakCepat.png'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // const [menu,setMenu] = useState("beranda");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav-menu" style={{margin:'auto',}}>
        <Link to="/chat">   <li>Chat</li></Link>
        <Link to="/notifikasi">   <li>Notifikasi</li></Link>
        <Link to="/bantuan">  <li>Bantuan</li></Link>
        <p/><p/>

            </ul>
        <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        </div>
    )
}

export default Navbar