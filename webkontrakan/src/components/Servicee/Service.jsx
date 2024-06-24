import { useState } from 'react';
import './Service.css'

const Service = () => {
    const [currentTab, setCurrentTab] = useState('PDAM');

  const tabs = [
    { name: 'PDAM', content: 'Bayar tagihan air PDAM tanpa khawatir mahal dan dijamin praktis!' },
    { name: 'PLN', content: 'Isi PLN secara online. Beli Pulsa Listrik PLN dan top up tagihan lainnya dengan metode pembayaran aman dan praktis!' },
    { name: 'PENGIRIMAN', content: 'Jasa kirim untuk barang pindahan anda dengan cepat dan aman sampai tujuan.' },
  ];

    return (
        <div className="container-sevice">
      <h1>LAYANAN</h1>
      <p>KontrakCepat hadir menjadi solusi bagi kamu</p>
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${currentTab === tab.name ? 'active' : ''}`}
            onClick={() => setCurrentTab(tab.name)}
          >
            <h3>{tab.name}</h3>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
      <div className="form">
        <input type="text" placeholder="No Pelanggan" className="input-customer" />
        <select className="select-region">
          <option value="">Pilih Wilayah</option>
          <option value="Kab. Sampang">Kab. Sampang</option>
          <option value="Kab. Trenggalek">Kab. Trenggalek</option>
          <option value="Kab. Sumenep">Kab. Sumenep</option>
          <option value="Kab. Pacitan">Kab. Pacitan</option>
          <option value="Kab. Magetan">Kab. Magetan</option>
          <option value="Kab. Blitar">Kab. Blitar</option>
          <option value="Kab. Jombang">Kab. Jombang</option>
          <option value="Kab. Madiun">Kab. Madiun</option>
          <option value="Kab. Kediri">Kab. Kediri</option>
          <option value="Kab. Mojokerto">Kab. Mojokerto</option>
          <option value="Kota. Pasuruan">Kota. Pasuruan</option>
          <option value="Kota. Bondowoso">Kota. Bondowoso</option>
          <option value="Kota. Probolinggo">Kota. Probolinggo</option>
        </select>
        <button className="button-continue">Lanjutkan</button>
      </div>
    </div>
  );
}

export default Service
