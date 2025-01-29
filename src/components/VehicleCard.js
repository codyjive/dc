import React, { useState } from 'react';

const VehicleCard = ({ vehicle }) => {
  const {
    vehicle_side,
    make,
    model,
    trim,
    year,
    vin,
    lease_payment_with_dollar,
    lease_term,
    lease_down_payment,
    finance_rate_plus_percent,
    combined_disclaimer,
    link,
  } = vehicle;

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="vehicle-offer">
      <h1>{`New ${year} ${make} ${model} ${trim}`}</h1>
      <p className="vin">VIN: {vin}</p>
      
      <div className="vehicle-image">
        <img src={vehicle_side} alt={`${year} ${make} ${model}`} />
      </div>

      <div className="offer-details">
        <div className="lease-button">LEASE OFFER</div>
        
        <div className="price">
          <span className="dollar">$</span>
          <span className="amount">{lease_payment_with_dollar}</span>
          <span className="period">/mo</span>
        </div>
        
        <p className="terms">{lease_term} MONTHS | {lease_down_payment} DUE AT SIGNING</p>
        
        {finance_rate_plus_percent && (
          <div className="finance-row">
            <span className="finance-label">FINANCE</span>
            <span className="dots">........</span>
            <span className="rate">{finance_rate_plus_percent}%</span>
          </div>
        )}
        
        <a className="view-vehicle" href={link}>View Vehicle</a>
        <p className="view-disclaimer" onClick={() => setShowDisclaimer(!showDisclaimer)}>
          View Disclaimer
        </p>
        {showDisclaimer && <p className="disclaimer">{combined_disclaimer}</p>}
      </div>
    </div>
  );
};

export default VehicleCard;
