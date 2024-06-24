import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar  from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import './Harga.css';

const Harga = () => {
  const navigate = useNavigate();
  const goToUkuran = () => {
    navigate('/sizekontrakan')
  }
  const goToBerhasil = () => {
    navigate('/berhasil')
  }
  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="container" style={{
        margin: 'auto'}}>
      <main>
        <h1>Berapa harga sewa Kontrak ?</h1>
        <form>
          <section>
            <p>Silahkan centang fasilitas yang ada dan sesuai untuk tipe kontrakan ini.</p>
            <h2>Harga Per Bulan ?</h2>
            <input type="number" id="total-rooms" name="total-rooms" />
          </section>
          <section>
            <h2>Anda ingin terapkan denda keterlambatan ?</h2>
            <p>Jumlah denda</p>
            <input type="number" id="total-rooms" name="total-rooms" />
          </section>
          <div className="buttons">
            <button type="button" onClick={goToUkuran}>Kembali</button>
            <button type="submit" onClick={goToBerhasil}>Lanjutkan</button>
          </div>
        </form>
      </main>
    </div>
    </div>
  );
};

export default Harga;
