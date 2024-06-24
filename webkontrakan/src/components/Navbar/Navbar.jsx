import { useState } from 'react'
import logo from '../../assets/Logo_Kontrakan.png'
import { Link } from 'react-router-dom';
import '../../components/Navbar/Navbarr.css'

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
            <ul className="nav-menu">
        <Link to="/" className='link'><li>Beranda</li></Link>
        <Link to="/layanan" className='link'>   <li>Layanan</li></Link>
        <Link to="/informasi" className='link'>  <li>Informasi</li></Link>
        <Link to="/tentang" className='link'>     <li>Tentang Kami</li></Link>
            </ul>
            <div className="nav-login-cart">
                <button>Daftar</button>
                <a href="/login"><button>Masuk</button></a>
            </div>
        <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        </div>
    )
}

export default Navbar