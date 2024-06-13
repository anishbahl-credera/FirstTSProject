import React, { useState, useEffect } from 'react';
import './LHS.css';
import Image from './LHS.png'

export default function LHS_Config() {
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000`); // Use relative path
        const data = await response.json();
        setHotSauces(data.data[6]);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
    
  }, []);


  return (<center>

 
    <div className="bodyLHS">
      {error && <div className="error">Load failed: {error}</div>}
      {hotSauces ? (
        <div className="hot-sauce-list">
          <div className="pic">
            <img src={Image} alt={`${hotSauces.name} image`} />
            <div className="info">
              <h2>{hotSauces.name}</h2>
              <p><strong>Price:</strong> ${hotSauces.price}</p>
            </div>
          </div>
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
   </center>);
}