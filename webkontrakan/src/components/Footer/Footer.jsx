import '../Footer/Footer.css'

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-section">
        <h3>Kontrak Cepat</h3>
        <ul>
            <li><a href="PLN">PLN</a></li>
            <li><a href="PDAM">PDAM</a></li>
            <li><a href="Pengiriman">Pengiriman</a></li>
        </ul>
    </div>
    <div className="footer-section">
        <h3>Lainnya</h3>
        <ul>
            <li><a href="Syarat & Ketentuan">Syarat & Ketentuan</a></li>
            <li><a href="Tentang Kami">Tentang Kami</a></li>
            <li><a href="Layanan">Layanan</a></li>
        </ul>
    </div>
        <div className="footer-section">
        <h3>Media Sosial</h3>
        <div className="social-icons">
            <a href="https://link1.com" className="icon" target="_blank"><i><img src="/src/assets/iconn/Facebookk.svg" alt="Social Icon 1" /></i></a>
            <a href="https://link2.com" className="icon" target="_blank"><i><img src="/src/assets/iconn/Twitter.png" alt="Social Icon 2" /></i></a>
            <a href="https://link3.com" className="icon" target="_blank"><i><img src="/src/assets/iconn/LinkedIn.png" alt="Social Icon 3" /></i></a>
            <a href="https://www.instagram.com/kontrakcepatapp?igsh=MWpkYzkyd3NpY2R5Zw==" className="icon" target="_blank"><i><img src="/src/assets/iconn/Instagramm.png" alt="Social Icon 4" /></i></a>
            <a href="https://link5.com" className="icon" target="_blank"><i><img src="/src/assets/iconn/YouTube.png" alt="Social Icon 5" /></i></a>
        </div>
    </div>
        <div className="footer-bottom">
        <p>Hak Cipta &copy; 2024 KontrakCepat</p>
        </div>
    </footer>
    );
};

export default Footer;