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
      <h5 className="vehicle-title">{`${year} ${make} ${model} ${trim}`}</h5>
      <img src={vehicle_side} alt={`${year} ${make} ${model}`} className="vehicle-image" />
      {lease_payment_with_dollar && (
        <div className="lease-offer">
          <span className="lease-label">Lease Special</span>
          <div className="lease-price">{lease_payment_with_dollar}/mo</div>
        </div>
      )}
      {finance_rate_plus_percent && (
        <div className="finance-offer">
          <span className="finance-label">Finance Offer</span>
          <div className="finance-text">{finance_rate_plus_percent} APR</div>
        </div>
      )}
      <a className="view-vehicle" href={link}>View Vehicle</a>
      <p className="view-disclaimer" onClick={() => setShowDisclaimer(!showDisclaimer)}>
        View Disclaimer
      </p>
      {showDisclaimer && <div className="disclaimer-modal">{combined_disclaimer}</div>}
    </div>
  );
};

export default VehicleCard;
