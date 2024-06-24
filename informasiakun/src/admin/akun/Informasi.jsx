import React from 'react';
import Sidebar from '../../layout/Sidebar';
import Navbar from '../../layout/Navbar';
import './Informasi.css';

function Informasi() {
  return (
    <div className="d-flex">
    <Sidebar />
    <Navbar />
    <div className="app" 
    style={{
        margin: 'auto'}}>
      <main className="main-content">
        <section className="content">
          <div className="info-section">
            <h2>Informasi Pribadi</h2>
            <div className="info-group">
              <div className="info-item">
                <span>Nama Lengkap</span>
                <span>Admin</span>
                <button>Ubah</button>
              </div>
              <div className="info-item">
                <span>Nomor Handphone</span>
                <span>0856278912</span>
                <button>Ubah</button>
              </div>
              <div className="info-item">
                <span>Password</span>
                <span>xxxxxxxx</span>
                <button>Ubah</button>
              </div>
              <div className="info-item">
                <span>Email</span>
                <span>@kontrakcepat.ghaj.com</span>
                <button>Ubah</button>
              </div>
            </div>
          </div>
          <div className="settings-section">
            <h2>Pengaturan Akun</h2>
            <div className="settings-group">
              <div className="settings-item">
                <input type="checkbox" checked disabled />
                <label>Rekomendasi via email</label>
              </div>
              <div className="settings-item">
                <input type="checkbox" checked disabled />
                <label>Notifikasi via chat</label>
              </div>
              <div className="settings-item">
                <input type="checkbox" checked disabled />
                <label>Notifikasi kontrak via SMS</label>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  );
}

export default Informasi;
