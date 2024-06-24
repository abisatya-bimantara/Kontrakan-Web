import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar  from '../../layout/Navbar';
import Sidebar from '../../layout/Sidebar';
import './Fasilitas.css';

const Fasilitas = () => {
  const navigate = useNavigate();
  const goToUploadfoto = () => {
    navigate('/uploadfoto')
  }
  const goToSizekontrakan = () => {
    navigate('/sizekontrakan')
  }
  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="container" style={{
        margin: 'auto'}}>
      <main>
        <h1>Fasilitas yang ada di kontrakan</h1>
        <form>
          <section>
            <h2>Fasilitas Umum</h2>
            <div>
              <input type="checkbox" id="wifi" name="wifi" />
              <label htmlFor="wifi">WIFI</label>
            </div>
            <div>
              <input type="checkbox" id="rooftop" name="rooftop" />
              <label htmlFor="rooftop">Rooftop</label>
            </div>
          </section>
          <section>
            <h2>Fasilitas Kamar</h2>
            <div>
              <input type="checkbox" id="ac" name="ac" />
              <label htmlFor="ac">AC</label>
            </div>
            <div>
              <input type="checkbox" id="cermin" name="cermin" />
              <label htmlFor="cermin">Cermin</label>
            </div>
          </section>
          <section>
            <h2>Fasilitas Kamar Mandi</h2>
            <div>
              <input type="checkbox" id="shower" name="shower" />
              <label htmlFor="shower">Shower</label>
            </div>
            <div>
              <input type="checkbox" id="wastafel" name="wastafel" />
              <label htmlFor="wastafel">Wastafel</label>
            </div>
          </section>
          <section>
            <h2>Fasilitas Parkir</h2>
            <div>
              <input type="checkbox" id="parkir-mobil" name="parkir-mobil" />
              <label htmlFor="parkir-mobil">Parkir mobil</label>
            </div>
            <div>
              <input type="checkbox" id="parkir-motor" name="parkir-motor" />
              <label htmlFor="parkir-motor">Parkir motor</label>
            </div>
          </section>
          <div className="actions">
            <button type="btn" onClick={goToUploadfoto}>Kembali</button>
            <button type="btn"onClick={goToSizekontrakan}>Lanjutkan</button>
          </div>
        </form>
      </main>
    </div>
    </div>
  );
};

export default Fasilitas;
