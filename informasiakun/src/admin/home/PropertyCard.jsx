// src/PropertyCard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PropertyCard.css'; // Import custom CSS for property card

const PropertyCard = ({ image, title, price, dateRange }) => {
  return (
    <div className="card mb-5">
      <div class="card-header">
      <p className="card-text">{dateRange}</p>
	    </div>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="Property" />
          <div className="card-body">
          <button className="btn btn-secondary me-5">Tandai sudah di sewakan</button>
            <button className="btn btn-secondary">Kadaluwarsa</button>
            </div>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
