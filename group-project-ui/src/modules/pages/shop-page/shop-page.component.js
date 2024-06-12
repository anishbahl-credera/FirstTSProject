
//import { useState } from "react";

import React, { useState } from 'react';
import './styles.css';
export default function ShopPageComponent() {
  const [query, setQuery] = useState('');
  const [hotSauces, setHotSauces] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://localhost:8000`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHotSauces(data);
    } catch (error) {
      setError(error.message);
    }
  };
  //name, price, description, origin, ingredients, spicy level
  return (
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
        {hotSauces.map((sauce) => (
          <div key={sauce.id} className="hot-sauce-item">
            <h2>{sauce.name}</h2>
            <p>Scoville Level: {sauce.scoville}</p>
            <p>Price: {sauce.price}</p>
            <p>Ingredients: {sauce.ingredients.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}






/*export default function ShopPageComponent() {
const [query, setQuery] = useState("");

    return (

        <div className = "SearchBar"> 
            <label>Search Bar</label>
            <input type="text" onChange={(e => setQuery(e.target.value))} />


        </div>
       
    )
}

/*const ShopPageComponent = () => {
    // component logic
    return (
        <div>This is the shopping page</div>
    )
  };
 */ 
  //export default ShopPageComponent;