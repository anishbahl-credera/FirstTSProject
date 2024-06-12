import React, { useState, useEffect } from 'react';

export default function ProductDetailComponent() {
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000`); // Use relative path
        const data = await response.json();
        console.log(data);
        setHotSauces(data);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

    return (
      <div className="HotSauceSearch">
        {error && <div className="error">Load failed: {error}</div>}
  
        <div className="hot-sauce-list">
          {Array.isArray(hotSauces) && hotSauces.map((sauce, index) => (
            <div key={index} className="hot-sauce-item">
              <h2>{sauce.name}</h2>
              <img src={sauce.Image} alt={`${sauce.name} image`} />
              <p><strong>Price:</strong> ${sauce.price}</p>
              <p><strong>Description:</strong> {sauce.description}</p>
              <p><strong>Origin:</strong> {sauce.origin}</p>
              <p><strong>Ingredients:</strong> {sauce.ingredients}</p>
              <p><strong>Scoville:</strong> {sauce.Scoville}</p>
              <p><strong>Size:</strong> {sauce.Size} oz</p>
            </div>
          ))}
        </div>
      </div>
    );
  }