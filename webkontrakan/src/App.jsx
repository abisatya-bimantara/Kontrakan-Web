import './App.css';
import Beranda  from './pages/Beranda/Beranda';
import Informasipage  from './pages/Informasi/Informasipage';
import Tentangpage from './pages/TentangKami/Tentangpage';
import Loginpage from './pages/Loginpage/LoginPage';
import Registerpage from './pages/Register/Registerpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Servicepage from './pages/Servicepage/Servicepage';
// ..
AOS.init();

function App() {
  return (
    
    <Router>
      <Routes>
    
        <Route path="/" element={<Beranda/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/informasi' element={<Informasipage/>}/>
        <Route path='/tentang' element={<Tentangpage/>}/>
        <Route path='/layanan' element={<Servicepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

