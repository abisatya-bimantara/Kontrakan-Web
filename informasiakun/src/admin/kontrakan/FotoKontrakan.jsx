import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import foto from '../../assets/image/kontrakan.png'
import Navbar  from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import './FotoKontrakan.css' ;

function FotoKontrakan() {
  const navigate = useNavigate();
  const goToAlamat = () => {
    navigate('/alamat')
  }
  
  const goToFasilitas = () => {
    navigate('/fasilitas')
  }
  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="app">
      <main className="main-content">
        <section className="content">
          <h1>Silahkan Lengkapi Data Kontrakan</h1>
          <p>Pasang foto terbaik kontrakan anda</p>
          <p>Foto yang menarik adalah hal pertama yang di perhatikan oleh calon penyewa</p>
          <div className="form-group">
            <label>Foto bangunan tampak depan</label>
            <div className="image-upload">
              <img src={foto} alt="tampak depan" style={{weight:'300px', height:'200px'}}/>
            </div>
          </div>
          <div className="form-group">
            <label>Foto tampilan dalam bangunan</label>
            <div className="image-upload">
              <button>+ Foto tampilan dalam bangunan</button>
            </div>
          </div>
          <div className="form-group">
            <label>Foto tampak dari jalan</label>
            <div className="image-upload">
              <button>+ Foto tampak dari jalan</button>
            </div>
          </div>
          <div className="actions">
            <button className="btn-back" onClick={goToAlamat}>Kembali</button>
            <button className="btn-next" onClick={goToFasilitas}>Lanjutkan</button>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}

export default FotoKontrakan;
