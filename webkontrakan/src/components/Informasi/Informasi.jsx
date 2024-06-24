import Info from '../../assets/informasi/image.png'
import ButtonSearch from '../../assets/informasi/Search.png';
import '../../components/Informasi/Informasii.css'

export const Informasi = () => {
    return (
        <div>
            <div className="header">
                <div className="header-contents">
                    <h2>Pusat Bantuan</h2>
                    <p>Silahkan konsultasikan pertanyaan anda dibawah ini</p>
                </div>
            </div>
            <div className="container">
                <div className="left-side">
                    <img src={Info} alt="image.png" />
                </div>
                <div className="right-side">
                <p>Hai, ada yang bisa kami bantu?</p>
                <div className="seaching">
                    <input className="input" id="searchInput" placeholder="Cari Informasi Disini" />
                <div className="search">
                <button><img className="search" src={ButtonSearch} alt="Button" /></button>
                </div>
                </div>
                <button>? Pusat Bantuan</button> 
                </div>
            </div>
        </div>
    );
};
