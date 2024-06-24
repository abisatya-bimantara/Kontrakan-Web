import './Tentangg.css'

import image1 from "../../assets/Tentangkamigambar/image1.png";
import image2 from "../../assets/Tentangkamigambar/image2.png";
import image3 from "../../assets/Tentangkamigambar/image3.png";

const Tentang = () => {
return (
    <div>
    <div className="about-section">
        <div className="container2">
        <div className="about-image1">
            <img src={image1} alt="about_us-image1.png" />
        </div>
        <h2 className="about-text-bold">
            Website Pencari Kontrakan Rumah Impian Anda, Sekarang Dalam
            Genggaman.
        </h2>
        <p className="about-text-primary">
            Cari Kontrakan yang akurat dan tepercaya kini semakin mudah.
            Membantu masyarakat untuk lebih mudah mencari kontrakan layak huni.
        </p>
        </div>
    </div>
    <div className="about-section">
        <div className="container2">
        <div className="text-side2">
            <h2 className="primary-heading2">Latar Belakang</h2>
            <p className="primary-text2">
                kontrak cepat menghadirkan solusi modern bagi para pencari hunian
                sewa dengan fitur-fitur yang memudahkan proses pencarian,
                pemilihan, dan manajemen kontrakan. Dengan antarmuka yang intuitif
                dan fitur pencarian yang canggih, aplikasi ini memungkinkan
                pengguna untuk menemukan kontrakan yang sesuai dengan kebutuhan
                mereka, mulai dari lokasi hingga fasilitas yang tersedia.{" "}
            </p>
            <p className="primary-text2">
                Selain itu, aplikasi ini juga memfasilitasi komunikasi antara
                penyewa dan pemilik, serta menyediakan fitur-fitur tambahan
                seperti pembayaran sewa dan pemeliharaan properti secara online.
                Dengan demikian, aplikasi kontrak cepat mengubah cara orang
                mencari dan mengelola hunian sewa dengan lebih efisien dan
                praktis.{" "}
            </p>
            </div>
            <div className="about-image2">
            <img src={image2} alt="about_us-image2.png.png" />
        </div>
        </div>
    </div>
    <div className="about-section">
        <div className="container">
        <div className="about-image3">
            <img src={image3} alt="about_us-image3.png.png" />
        </div>
        <div className="text-side">
            <h2 className="primary-heading">
                Informasi Data Kontrakan Yang Lengkap
            </h2>
            <p className="primary-text">
                Kami mengelola dan menyajikan daftar kontrakan yang lengkap, serta
                Penjelasan fasilitas dengan foto, serta detail dari setiap
                Kontrakan. Kami juga memiliki tim untuk mengsurvey atau mengecek
                apakah kontrakan ini bisa dipakai.
            </p>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Tentang