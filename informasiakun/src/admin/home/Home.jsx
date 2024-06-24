import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropertyCard from './PropertyCard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kontrakan from '../../assets/image/kontrakan.png';
import './Home.css'; 
import EditData from '../kontrakan/EditData.jsx';
import Navbar from '../../layout/Navbar.jsx';
import Sidebar from '../../layout/Sidebar.jsx';

const Home = () => {
    const navigate = useNavigate()
  
    const goToEdit = () => {
      navigate('/edit')
    }
  return (
    <div className="d-flex">
      <Sidebar />
      <Navbar />
        <div className="d-flex flex-column"
        style={{
          marginLeft: '50px',
          margin: 'auto'
        }}>
          <p/><p/><p/>
          <h2>Halo, admin</h2>
          <Link to="/edit">
          <button className="btn btn-success mb-0" 
          onClick={goToEdit}
          >Data Diri
          </button>
          </Link>
          <div className="row">
            <div className="col-md-6">
              <PropertyCard
                image={Kontrakan} alt="kontrakan"
                title="KONTRAKAN MELATI CT302"
                price="RP.3000.000 per bulan"
                dateRange="Dari 20 Mei Sampai 19 April"
              />
            </div>
            <div className="col-md-6">
              <PropertyCard
                image={Kontrakan} alt="kontrakan"
                title="KONTRAKAN MELATI CT302"
                price="RP.3000.000 per bulan"
                dateRange="Dari 20 Mei Sampai 19 April"
              />
            </div>
            <div className="col-md-6">
              <PropertyCard
                image={Kontrakan} alt="kontrakan"
                title="KONTRAKAN MELATI CT302"
                price="RP.3000.000 per bulan"
                dateRange="Dari 20 Mei Sampai 19 April"
              />
            </div>
            <div className="col-md-6">
              <PropertyCard
                image={Kontrakan} alt="kontrakan"
                title="KONTRAKAN MELATI CT302"
                price="RP.3000.000 per bulan"
                dateRange="Dari 20 Mei Sampai 19 April"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
