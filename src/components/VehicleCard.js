import React, { useState } from 'react';

const VehicleCard = ({ vehicle }) => {
  const {
    year,
    make,
    model,
    trim,
    vin,
    vehicle_side,
    lease_payment_with_dollar,
    lease_term,
    lease_down_payment,
    finance_rate_plus_percent,
    combined_disclaimer,
  } = vehicle;

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const formatAmount = (amount) => {
    return amount.toString().replace(/1/g, '<span class="one">1</span>');
  };

  return (
    <div className="vehicle-offer">
      <h2 className="vehicle-title">New {year} {make} {model} {trim}</h2>
      <p className="vin">VIN: {vin}</p>
      
      <div className="vehicle-image">
        <img src={vehicle_side} alt={`${year} {make} {model}`} />
      </div>

      <div className="offer-container">
        <div className="lease-section">
          <div className="lease-button">LEASE OFFER</div>
          <div className="lease-amount">
            <span className="amount" dangerouslySetInnerHTML={{ __html: formatAmount(lease_payment_with_dollar) }} />
            <span className="period">/mo</span>
          </div>
          <div className="lease-terms">
            {lease_term} MONTHS | {lease_down_payment} DUE AT SIGNING
          </div>
        </div>

        {finance_rate_plus_percent && (
          <div className="finance-section">
            <span className="finance-label">RATES LOW AS</span>
            <span className="dots">.....</span>
            <span className="rate">{finance_rate_plus_percent}</span>
          </div>
        )}

        <p className="view-disclaimer" onClick={() => setShowDisclaimer(!showDisclaimer)}>
          {showDisclaimer ? "Hide Disclaimer" : "View Disclaimer"}
        </p>
        {showDisclaimer && <p className="disclaimer">{combined_disclaimer}</p>}
      </div>
    </div>
  );
};

export default VehicleCard;
