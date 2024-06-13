
//import { useState } from "react";

import React, { useState, useEffect } from 'react';


export default function ShopPageComponent() {
  const [query, setQuery] = useState('');
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);

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


  //name, price, description, origin, ingredients, spicy level
  return (
    <div className="HotSauceSearch">

      {error && <div className="error">{error}</div>}

      <div className="hot-sauce-list">
        {hotSauces.map((sauce, index) => (
          <div key={index} className="hot-sauce-item">
            <h2>{sauce.name}</h2>
            <p>Scoville Level: {sauce.scoville}</p>
            <p>Price: {sauce.price}</p>
            <p>Ingredients: {sauce.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




