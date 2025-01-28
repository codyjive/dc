import React from 'react';

const VehicleCard = ({ vehicle }) => {
  const {
    image_url,
    make,
    model,
    trim,
    year,
    lease_payment_with_dollar,
    finance_rate_plus_percent,
    cash_discount,
    disclaimer,
    link,
  } = vehicle;

  return (
    <div className="card h-100">
      <img src={image_url} className="card-img-top" alt={`${year} ${make} ${model}`} />
      <div className="card-body">
        <h5 className="card-title">{`${year} ${make} ${model} ${trim}`}</h5>
        <p className="card-text">
          {lease_payment_with_dollar && <div>Lease: {lease_payment_with_dollar}/mo</div>}
          {finance_rate_plus_percent && <div>Finance: {finance_rate_plus_percent} APR</div>}
          {cash_discount && <div>Cash Discount: {cash_discount}</div>}
        </p>
        <p className="text-muted small">{disclaimer}</p>
        <a href={link} className="btn btn-primary">View Vehicle</a>
      </div>
    </div>
  );
};

export default VehicleCard;