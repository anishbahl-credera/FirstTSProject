import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCart } from '../../cart/retrieve-cart/retrieve-cart.slice';
import hotsauceImage from '../../../images/hotsauce.png';
import { useHistory } from 'react-router-dom';
import { RequestStatus } from '../../common/redux/redux.constants';
import { Button } from '@material-ui/core';
import '../../../Homepage.css';

export const HomePageComponent = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const retrieveCartState = useSelector(state => state.cart.retrieveCart);

  useEffect(() => {
    // Example purposes only - should likely move retrieveCart call to a new 'cart' component
    dispatch(retrieveCart(1));
  }, []);

  return (
    <div className="landingPage">
      {/* Home Page
      {retrieveCartState.status === RequestStatus.LOADING
        ? (<div data-testid='loading-spinner'>Loading...</div>)
        : (
          <div>
            <Button onClick={() => dispatch(retrieveCart(1))}>Retrieve Cart</Button>
            <div>(Current CartId: {retrieveCartState?.response?.cartId})</div>
            <div>
              {JSON.stringify(retrieveCartState?.response)}
            </div>
          </div>
        )
      } */}
      
      <div className="HotsauceContainer">
        <p className="description"> Welcome to Crediablo! Founded in 2024 by four college friends with a shared passion for bold flavors and culinary creativity, crediablo is more than just a hot sauce company—it's a story of friendship, innovation, and a relentless quest for the perfect spice. 
        </p>

       <div className="TextContainer1"> 
          <h1> CRED </h1>
          <p> It's not just SPICY </p>
        </div>

        <div className="HotsauceImage"> 
          <img src={ hotsauceImage } alt="HotSauce"/>
        </div>
         
        <div className="TextContainer2">
          <h1> IABLO </h1>
          <p> It's INCREDIABLO </p>
        </div>
        

        <button className="ShopNow" onClick={() => history.push('/shop')}> Shop Now </button>

      </div>

      
    </div>
  );
}

export default HomePageComponent;
