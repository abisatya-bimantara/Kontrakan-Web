import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto';
import '@fontsource/outfit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../admin/home/Home';
import EditData from '../admin/kontrakan/EditData';
import Kontrakan from '../admin/kontrakan/Kontrakan';
import DataKontrakan from '../admin/kontrakan/DataKontrakan';
import FotoKontrakan from '../admin/kontrakan/FotoKontrakan';
import Informasi from '../admin/akun/Informasi';
import DataTerkirim from '../admin/kontrakan/DataTerkirim';
import Alamat from '../admin/kontrakan/Alamat';
import Fasilitas from '../admin/kontrakan/Fasilitas';
import Size from '../admin/kontrakan/Size';
import Harga from '../admin/kontrakan/Harga';
import Notifikasi from '../navbar/Notifikasi';
import Chat from '../navbar/Chat';
import Berhasil from '../admin/kontrakan/Berhasil';

function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<EditData/>} />
        <Route path='/editsucces' element={<DataTerkirim/>} />
        <Route path='/kontrakan' element={<Kontrakan/>} />
        <Route path='/datakontrak' element={<DataKontrakan/>} />
        <Route path='/alamat' element={<Alamat/>} />
        <Route path='/uploadfoto' element={<FotoKontrakan/>} />
        <Route path='/fasilitas' element={<Fasilitas/>} />
        <Route path='/sizekontrakan' element={<Size/>} />
        <Route path='/hargakontrakan' element={<Harga/>} />
        <Route path='/berhasil' element={<Berhasil/>} />
        <Route path='/informasiakun' element={<Informasi/>} />
        <Route path='/chat' element={<Chat/>} />
        {/* <Route path='/notifikasi' element={<Notifikasi/>} />
        <Route path='/bantuan' element={<Bantuan/>} /> */}
      </Routes>
  )
}

export default AppRoutes