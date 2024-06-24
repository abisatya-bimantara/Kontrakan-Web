import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar  from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import Maps from '../../assets/image/maps.png'
import './Alamat.css';

function Alamat() {
  const navigate = useNavigate();

  const goToUploadfoto = () => {
    navigate('/uploadfoto')
  }
  const goToDatakontrak = () => {
    navigate('/datakontrak')
  }
  return (
    <div className="d-flex">
        <Sidebar/>
        <Navbar/>
    <div className="complete-data-form">
      <h2 style={{marginTop: '100px'}}>Alamat Kontrakan</h2>
      <h3>Cari Alamat Kontrakan Anda di Peta</h3>
      <p>Posisikan pin untuk tampilkan alamat kontrakan. Silahkan lengkapi dengan nomor rumah dan RT/RW, jika belum ada</p>
      <div className="search-bar">
        <input type="text" placeholder="Jabodetabek" />
        <button className="search-button">🔍</button>
      </div>
      <img src={Maps} alt="maps.png" />
    <div className="form-actions" style={{marginTop: '-50px'}}>
          <button onClick={goToDatakontrak}>Kembali</button>
          <button onClick={goToUploadfoto} >Lanjutkan</button>
        </div>
    </div>
    </div>
  );
}

export default Alamat;
