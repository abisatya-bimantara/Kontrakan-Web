import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar.jsx';
import Navbar from '../../layout/Navbar.jsx';
import FotoKontrakan from '../../assets/image/kontrakan.png';
import './Kontrakan.css'

function Kontrakan() {
  const navigate = useNavigate();

  const goToDatakontrak = () => {
    navigate('/datakontrak')
  }

  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="main-content" style={{marginTop: '100px', alignItems:'center'}}>
      <div className="search-bar">
        <input type="text" placeholder="Cari Kontrakan Anda Disini..." />
        <button className="search-button">🔍</button>
      </div>
      <div className="property-card" style={{height:'500px'}}>
        <h2>Kontrakan Melati CT302</h2>
        <p>JL. Kp. Jogoyudan No.302, Gowongan, Kec, Jetis, Kota Yogyakarta, Daerah I.....</p>
        <img src={FotoKontrakan} alt="kontrakan.png" />
        <div className="property-status">
          <div className="status-alert">
            <span>❌ Lengkapi Data Kos</span>
            <p>Iklan kos ini belum tampil di halaman pencarian kos</p>
          </div>
        </div>
        <div className="property-actions">
          <button >Hapus Kontrakan</button>
          <button onClick={goToDatakontrak}>Lengkapi Data</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Kontrakan;
