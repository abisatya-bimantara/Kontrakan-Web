import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../layout/Sidebar';
import Help from '../../assets/image/help.png';
import './DataTerkirim.css';
import Navbar from '../../layout/Navbar';
import Kontrakan from './Kontrakan';

function DataTerkirim() {
  const navigate = useNavigate();
  
  const goToKontrakan = () => {
    navigate('/kontrakan')
  }
  return (
    <div className='d-flex'>
    <Sidebar />
    <Navbar />
    <div className='col'>
      <img src={Help} alt="help.png" />
      <h1> Data Kos Dikirim</h1>
      <p> Data berhasil dikirim </p>
      <button onClick={goToKontrakan}> Selesai </button>
    </div>
    </div>
  )
}

export default DataTerkirim
