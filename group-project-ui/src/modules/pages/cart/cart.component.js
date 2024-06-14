
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

      <div className="entireContainer">
        <div className="cartList">
          <div className="headerContainer">
            <div className="cartHeaders">
              <p> Product </p>
              <p> Name </p>
              <p> Delete </p>
              <p> Price </p>
            </div>
          </div>

          {hotSauces.map((sauce, index) => (
            <div key={index} className="cartitem">
              <div className="imageContainer">
                <div className="imageBlock"> </div>
              </div>
              <div className="nameContainer">
                <p className="sauceName"> {sauce.name} </p>
              </div>
              <div className="priceContainer">
                <p className="price"> ${sauce.price}</p>
              </div>
              <button className="deleteButton" onClick={() => handleDelete(sauce.name)}>Delete</button>
            </div>
          ))}
        </div>
        <div className="checkoutSection">
          <div className="lineContainer">
            <div className="line"></div>
          </div>
          <div className="totalContainer"> 
            <p className="cartTotal"> cart total: &nbsp;&nbsp; </p>
            <p className="totalPrice"> ${totalPrice.toFixed(2) || '0'} </p>
          </div>
          <div className="shippingtaxesContainer">
            <p className="shippingtaxes"> Shipping & taxes calculated at checkout </p>
          </div> 
          <div className="checkoutButtonContainer">
            <button className="checkoutButton"> Checkout </button>
          </div>

          <div className="bottomSection">
            <div className="returnContainer">
              <p> ALL SALES ARE FINAL. WE DO NOT ACCEPT RETURNS OR EXCHANGES </p>
            </div>
            <div className="lineContainer2">
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





