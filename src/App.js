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
        const response = await axios.get('https://app.dealercentives.com/auto/feeds/all/Honda/all/23181?ids=%%BN_FEED_ITEM_IDS%%');
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
    <div>
      <div className="banner-header">
        <h1>New Honda Lease Specials</h1>
      </div>
      <div className="container">
        <SpecialOffers vehicles={vehicles} />
      </div>
    </div>
  );
}

export default App;
