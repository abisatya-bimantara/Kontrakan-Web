import rumah from '../../assets/Vectorrumah.png'
import dolar from '../../assets/Vectoruang.png'
import '../Pencarian/Pencariann.css'

const Pencarian = () => {
return (
    <div className='bgtengah'>
    <div className='dream-rental'>
    <h1>Temukan Kontrakan Impianmu</h1>
    <p>Sekarang anda bisa menghemat semua hal dari biaya tersembunyi, waktu,
        stres dengan ratusan rekomendasi kami untuk anda.
    </p>
    <div className="search-container">
    <img className="imgg" src={rumah} alt="Vectorrumah" />
        <select className="dropdown">
            <option value="">Tipe Rumah</option>
        </select>
        <img src={dolar} alt="" />
        <select className="dropdown">
            <option value="">Range Harga</option>
        </select>
        <div className="input-wrapper">
            <input className="input" id="searchInput" placeholder="Cari Disini..." />
        </div>
            <button className="search-button">Cari</button>
        </div>
    </div>
    </div>
    );
};

export default Pencarian