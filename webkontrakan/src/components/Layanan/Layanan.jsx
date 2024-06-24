import pln from '../../assets/Union.png'
import PDAM from '../../assets/filled.png'
import pengiriman from '../../assets/truck-fast.png'
import '../../components/Layanan/Layanann.css'

const Layanan = () => {
    return (
        
        <div className='layanan'>
        <h1 data-aos="fade-left" data-aos-duration="500">LAYANAN</h1>
        <p data-aos="fade-left" data-aos-duration="1000">KontrakCepat hadir menjadi solusi bagi kamu</p>
        
        <div className="container">
        <div  className="kartu-layanan">
        <div className="kartu" data-aos="fade-right" data-aos-duration="1000">
        <a href="/pdam" className="link">
        <img className="kartu-ikon"src={PDAM} alt="PDAM"/>
        <div className="kartu-judul">PDAM</div>
        <div className="kartu-deskripsi">
            Bayar tagihan air PDAM tanpa khawatir mahal dan dijamin praktis!
            </div>
            </a>
        </div>
        <div className="kartu" data-aos="fade-up" data-aos-duration="1000">
        <a href="/PLN" className="link">
        <img className="kartu-ikon" src={pln} alt="Union.png" />
        <div className="kartu-judul">PLN</div>
        <div className="kartu-deskripsi">
            Isi PLN secara online. Beli Pulsa Listrik PLN dan top up tagihan lainnya dengan metode pembayaran aman dan praktis!
            </div>
            </a>
        </div>
        <div className="kartu" data-aos="fade-left" data-aos-duration="1000">
        <a href="/PENGIRIMAN" className="link">
        <img className="kartu-ikon"src={pengiriman} alt="truk-fast.png"/>
        <div className="kartu-judul">PENGIRIMAN</div>
            <div className="kartu-deskripsi">
            Jasa kirim untuk barang pindahan Anda dengan cepat dan aman sampai tujuan.
            </div>
            </a>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Layanan