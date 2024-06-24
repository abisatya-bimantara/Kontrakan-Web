import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar.jsx';
import Navbar from '../../layout/Navbar.jsx';
import './Berhasil.css' ;
import Kontrakan from '../../assets/image/kontrakan.png';


function Berhasil() {
  const navigate = useNavigate();

  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="main-content" style={{marginTop: '100px', alignItems:'center'}}>
      <div className="search-bar">
        <input type="text" placeholder="Cari Kontrakan Anda Disini..." />
        <button className="search-button">🔍</button>
      </div>
      <div className="property-card">
        <h2>Kontrakan Melati CT302</h2>
        <p>JL. Kp. Jogoyudan No.302, Gowongan, Kec, Jetis, Kota Yogyakarta, Daerah I.....</p>
        <img src={Kontrakan} alt="kontrakan.png" />
        <div className="property-status">
        </div>
        <div className="property-actions">
          <button>Diperiksa Admin</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Berhasil;
