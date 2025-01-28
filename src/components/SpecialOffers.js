import React from 'react';
import VehicleCard from './VehicleCard';

const SpecialOffers = ({ vehicles }) => {
  if (vehicles.length === 0) {
    return <div className="text-center">No specials available at this time.</div>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {vehicles.map((vehicle) => (
        <div key={vehicle.vin} className="col">
          <VehicleCard vehicle={vehicle} />
        </div>
      ))}
    </div>
  );
};

export default SpecialOffers;