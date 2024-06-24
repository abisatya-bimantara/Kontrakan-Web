import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{
        width: '250px',
        height: '150vh',
        backgroundColor: '#DAF2EE', 
        backgroundSize: 'cover', 
      }}
    >
      <p />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a href="/" className="nav-link link-dark" aria-current="page">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="/edit" className="nav-link link-dark">
            <i className="fas fa-building"></i> Kontrakan
          </a>
        </li>
        <li>
          <a href="/informasiakun" className="nav-link link-dark">
            <i className="fas fa-user"></i> Akun
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
