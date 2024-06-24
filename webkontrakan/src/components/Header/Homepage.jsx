import '../../components/Header/Berandaa.css';

const Homepage = () => {
return (
    <div className="welcome-container">
    <div className="welcome-content">
        <h2 data-aos="fade-up" data-aos-duration="500">Selamat Datang di KontrakCepat!</h2>
        <p data-aos="fade-up" data-aos-duration="1000">Rumah Impian Anda, Sekarang Dalam Genggaman</p>
        <button className="welcome-button" data-aos="fade-up" data-aos-duration="1500">Temukan Kontrakan</button>
    </div>
    </div>
    );
};

export default Homepage;