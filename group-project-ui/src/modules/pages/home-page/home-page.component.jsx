import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCart } from '../../cart/retrieve-cart/retrieve-cart.slice';
import hotsauceImage from '../../../images/homepageHotSauce.png';
import { RequestStatus } from '../../common/redux/redux.constants';
import { Button } from '@material-ui/core';
import '../../../Homepage.css';

export const HomePageComponent = () => {

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
       <div className="TextContainer1"> 
          <h1> CRED </h1>
        </div>

        <div className="HotsauceImage"> 
          <img src={ hotsauceImage } alt="HotSauce"/>
        </div>
         
        <div className="TextContainer2">
          <h1> IABLO </h1>
        </div>
        
      </div>

      
    </div>
  );
}

export default HomePageComponent;
