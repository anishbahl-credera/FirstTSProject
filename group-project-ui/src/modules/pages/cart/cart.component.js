
//import { useState } from "react";

import React, { useState, useEffect } from 'react';
import './cart.css';

export default function ShopPageComponent() {
  const [query, setQuery] = useState('');
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8000/cart`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHotSauces(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [hotSauces]);

  const handleDelete = async (name) => {
    try {
      const response = await fetch(`http://localhost:8000/deletecart`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setHotSauces((prevHotSauces) => {
        const index = prevHotSauces.findIndex(sauce => sauce.name === name);
        if (index !== -1) {
          const newHotSauces = [...prevHotSauces];
          newHotSauces.splice(index, 1);
          return newHotSauces;
        }
        return prevHotSauces;
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const calculateTotalPrice = () => {
    const total = hotSauces.reduce((sum, sauce) => sum + sauce.price, 0);
    setTotalPrice(total);
  };

  //name, price, description, origin, ingredients, spicy level
  return (
    <div className="cartPage">
      {error && <div className="error">{error}</div>}

      <div className="hot-sauce-list">
        {hotSauces.map((sauce, index) => (
          <div key={index} className="hot-sauce-item">
            <h2>{sauce.name}</h2>
            <p>Scoville Level: {sauce.scoville}</p>
            <p>Price: {sauce.price}</p>
            <p>Ingredients: {sauce.ingredients}</p>
            <button onClick={() => handleDelete(sauce.name)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="price"> 
        <h2> Price {totalPrice || '0'} </h2>
      </div>
    </div>
  );
};





