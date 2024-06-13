import React, { useState, useEffect } from 'react';
import './general.css';

export default function CrystalConfig() {
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000`); // Use relative path
        const data = await response.json();
        setHotSauces(data.data[8]);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
    
  }, []);

  return (
    <div className="bodyCrystal">
      {error && <div className="error">Load failed: {error}</div>}
      {hotSauces ? (
        <div className="hot-sauce-list">
          <img src={hotSauces.Image} alt={`${hotSauces.name} image`} />
          <h2>{hotSauces.name}</h2>
          <p><strong>Price:</strong> ${hotSauces.price}</p>
          <p><strong>Description:</strong> {hotSauces.description}</p>
          <p><strong>Ingredients:</strong> {hotSauces.ingredients}</p>
          <p><strong>Scoville Units:</strong> {hotSauces.Scoville}</p>
          <p><strong>Origin Country:</strong> {hotSauces.origin}</p>
          <p><strong>Size:</strong> {hotSauces.Size} oz</p>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
