
//import { useState } from "react";

import React, { useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
export default function ShopPageComponent() {
  const [query, setQuery] = useState('');
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();
  
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8000`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const filteredData = data.data.filter(sauce => 
        sauce.name.toLowerCase().includes(query.toLowerCase())
      );
      setHotSauces(filteredData);
    } catch (error) {
      setError(error.message);
    }
  };

  
  //name, price, description, origin, ingredients, spicy level
  return (
    <div className = "SearchPage">
      <div className="HotSauceSearch">
       <center>
        <h1 className="cool-heading">Crediablo</h1>
      <label htmlFor="search">Search Hot Sauces:</label>
       <h1></h1>
      <input
        type="text"
        id="search"
        placeholder="Search for hot sauces..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
        </center> 

        {error && <div className="error">{error}</div>}

      <div className="hot-sauce-list">
      {hotSauces.map((sauce, index) => (
                    <div key={index} className="hot-sauce-item">
                        <h2>{sauce.name}</h2>
                        
                        <p>Scoville Level: {sauce.scoville}</p>
                        <p>Price: ${sauce.price}</p>
                        <p>Ingredients: {sauce.ingredients}</p>
                        <button 
                className="more" 
                onClick={() => history.push(`/productDetail/${sauce.id}`)}
              >
                More...
              </button>
                    </div>
        ))}
      </div>
    </div>
  </div>
  );
}

