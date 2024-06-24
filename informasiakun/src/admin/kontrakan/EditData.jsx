import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar  from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import './EditData.css' ;
import DataTerkirim from './DataTerkirim';
import Kontrakan from './Kontrakan';

const EditData = () => {
  const navigate = useNavigate();
  const goToKontrakan = () => {
    navigate('/kontrakan')
  }
  const goToEditsucces = () => {
    navigate('/editsucces')
  }
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nomorRekening: '',
    namaBank: '',
    namaPemilikRekening: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  
  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="d-flex flex-column"  
    style={{
        margin: 'auto'}}>
      <h2>Lengkapi data diri Anda</h2>
      <p>Silahkan isi data berikut ini untuk mulai mengaktifkan fitur Booking Langsung.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="namaLengkap">Nama Lengkap</label>
          <input
            type="text"
            id="namaLengkap"
            name="namaLengkap"
            value={formData.namaLengkap}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomorRekening">Nomor Rekening</label>
          <input
            type="text"
            id="nomorRekening"
            name="nomorRekening"
            value={formData.nomorRekening}
            onChange={handleChange}
            placeholder="Masukkan nomor rekening Anda"
          />
        </div>
        <div className="form-group">
          <label htmlFor="namaBank">Nama Bank</label>
          <input
            type="text"
            id="namaBank"
            name="namaBank"
            value={formData.namaBank}
            onChange={handleChange}
            placeholder="Masukkan nama bank"
          />
        </div>
        <div className="form-group">
          <label htmlFor="namaPemilikRekening">Nama Pemilik Rekening</label>
          <input
            type="text"
            id="namaPemilikRekening"
            name="namaPemilikRekening"
            value={formData.namaPemilikRekening}
            onChange={handleChange}
            placeholder="Masukkan nama pemilik rekening"
          />
        </div>
        <p className="note">
          Pastikan data Anda benar dan sesuai, agar uang pembayaran kontrakan dapat ditransfer dengan lancar.
        </p>
        <div className="form-actions">
          <button onClick={goToKontrakan}>Lewati</button>
          <button onClick={goToEditsucces}>Kirim Data</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default EditData;
