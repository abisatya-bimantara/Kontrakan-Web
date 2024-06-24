import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar  from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import './DataKontrakan.css';

function DataKontrakan() {
  const navigate = useNavigate();

  const goToAlamat = () => {
    navigate('/alamat')
  }
  const goToKontrakan = () => {
    navigate('/kontrakan')
  }
  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="complete-data-form">
      <h2 style={{marginTop: '100px'}}>Silahkan Lengkapi Data Kontrakan</h2>
      <form>
        <div className="form-group">
          <label>Apa Nama Kontrakan ini?</label>
          <input type="text" defaultValue="Melati" />
        </div>
        <div className="form-group">
          <label>Disewakan untuk Putra/Putri?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="putra" /> Putra
            </label>
            <label>
              <input type="radio" name="gender" value="putri" /> Putri
            </label>
            <label>
              <input type="radio" name="gender" value="campur" defaultChecked /> Campur
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Deskripsi Kontrakan</label>
          <textarea placeholder="Ceritakan hal menarik tentang kontrakan anda"></textarea>
          <small>0/500</small>
        </div>
        <div className="form-group">
          <label>Kapan Kontrakan ini dibangun? (Opsional)</label>
          <input type="text" placeholder="Tahun" />
        </div>
        <div className="form-group">
          <label>Catatan Lainnya</label>
          <textarea></textarea>
        </div>
        <div className="form-actions" style={{marginTop: '-50px'}}>
          <button type="submit" onClick={goToKontrakan}>Kembali</button>
          <button type="submit" onClick={goToAlamat} >Lanjutkan</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default DataKontrakan;
