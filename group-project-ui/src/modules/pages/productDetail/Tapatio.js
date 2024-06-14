import React, { useState, useEffect } from 'react';
import './Tapatio.css';
import Image from './Tapatio.png';

export default function TapatioConfig() {
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);
  const [dataa, setDataa] = useState(null);



  useEffect(() => {
    document.body.classList.add('bodyTapatio');
    return () => {
      document.body.classList.remove('bodyTapatio');
    };
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000`); // Use relative path
        const data = await response.json();
        setHotSauces(data.data[4]);
        setDataa(data.data[4]);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    };

    fetchData();
    
  }, []);

  async function addToCart(data) {
    try {
        const response = await fetch('http://localhost:8000/addcart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Item added to cart:', result);
        return result;
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
}


return (
  <center>
    <div className="bodyTapatio">
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
      <div className="button-container">
        <button className="AddToCart" onClick={() => addToCart(dataa)}>Add to Cart</button>
      </div>
    </div>
  </center>
  );
}