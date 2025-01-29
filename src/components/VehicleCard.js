const VehicleCard = ({ vehicle }) => {
  const {
    vehicle_side,
    make,
    model,
    trim,
    year,
    lease_payment_with_dollar,
    finance_rate_plus_percent,
    disclaimer,
    link,
  } = vehicle;

  return (
    <div className="vehicle-card">
      <img src={vehicle_side} alt={`${year} ${make} ${model}`} className="vehicle-image" />
      <div className="card-body">
        <h5 className="card-title">{`${year} ${make} ${model} ${trim}`}</h5>
        <p className="card-text">
          {lease_payment_with_dollar && <div className="lease-offer">Lease: {lease_payment_with_dollar}/mo</div>}
          {finance_rate_plus_percent && <div>Finance: {finance_rate_plus_percent} APR</div>}
        </p>
        <p className="text-muted small">{disclaimer}</p>
        <a href={link} className="btn-primary">View Vehicle</a>
      </div>
    </div>
  );
};

export default VehicleCard;
