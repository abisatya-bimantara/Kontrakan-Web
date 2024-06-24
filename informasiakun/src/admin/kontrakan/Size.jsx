import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar  from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import './Size.css';

const Size = () => {
    const navigate = useNavigate();
    const goToFasilitas = () => {
      navigate('/fasilitas')
    }
    const goToHarga = () => {
      navigate('/hargakontrakan')
    }
  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="container" style={{
        margin: 'auto'}}>
      <main>
        <h1>Ketersediaan kamar kontrakan.</h1>
        <form>
          <section>
            <h2>Berapa ukuran kamarnya?</h2>
            <div className="room-size">
              <button type="button" className="size-option">3 x 3</button>
              <button type="button" className="size-option">3 x 4</button>
              <button type="button" className="size-option">Lainnya</button>
            </div>
          </section>
          <section>
            <h2>Berapa jumlah total kamar?</h2>
            <input type="number" id="total-rooms" name="total-rooms" />
          </section>
          <div className="buttons">
            <button type="button" onClick={goToFasilitas}>Kembali</button>
            <button type="submit" onClick={goToHarga}>Lanjutkan</button>
          </div>
        </form>
      </main>
    </div>
    </div>
  );
};

export default Size;
