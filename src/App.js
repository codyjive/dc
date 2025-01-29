import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpecialOffers from './components/SpecialOffers';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/vehicles.json');
        setVehicles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Special Offers</h1>
      <SpecialOffers vehicles={vehicles} />
    </div>
  );
}

export default App;