import React, { useState } from 'react';

const VehicleCard = ({ vehicle }) => {
  const {
    vehicle_side,
    make,
    model,
    trim,
    year,
    lease_payment_with_dollar,
    finance_rate_plus_percent,
    combined_disclaimer,
    link,
  } = vehicle;

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="vehicle-card">
      <img src={vehicle_side} alt={`${year} ${make} ${model}`} className="vehicle-image" />
      <div className="card-body">
        <h5 className="card-title">{`${year} ${make} ${model} ${trim}`}</h5>
        {lease_payment_with_dollar && (
          <div className="lease-offer">
            <span className="lease-label">Lease Special</span>
            <div className="lease-price">{lease_payment_with_dollar}/mo</div>
          </div>
        )}
        {finance_rate_plus_percent && <div>Finance: {finance_rate_plus_percent} APR</div>}
        <button className="disclaimer-button" onClick={() => setShowDisclaimer(!showDisclaimer)}>
          View Disclaimer
        </button>
        {showDisclaimer && <p className="disclaimer-text">{combined_disclaimer}</p>}
        <a href={link} className="btn-primary">View Vehicle</a>
      </div>
    </div>
  );
};

export default VehicleCard;
