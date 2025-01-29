import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpecialOffers from './components/SpecialOffers';
import './styles.css';

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
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="header-title">New Honda Lease Specials</h1>
      <SpecialOffers vehicles={vehicles} />
    </div>
  );
}

export default App;
