import React, { useState, useEffect } from 'react';

export default function ProductDetailComponent() {
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000`); // Use relative path
        const data = await response.json();
        setHotSauces(data.data[0]);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

    return (
      <div className="HotSauceSearch">  
        <div className="hot-sauce-list">

          <h2> {hotSauces.name} </h2>
          <h2> {hotSauces.Scoville} </h2>

        </div>
      </div>
    );
  }