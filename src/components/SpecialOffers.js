import React from 'react';
import VehicleCard from './VehicleCard';

const SpecialOffers = ({ vehicles }) => {
  return (
    <div className="special-offers">
      {vehicles.length > 0 ? (
        vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.vin} vehicle={vehicle} />
        ))
      ) : (
        <p className="no-offers">No special offers available at this time.</p>
      )}
    </div>
  );
};

export default SpecialOffers;
