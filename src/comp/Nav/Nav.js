/*
-left icon
- serach bar
- signin
- orders
- basket with numbers count
*/

import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import amazon_logo from '../../assets/amazon_logo.png';
import basket_logo from '../../assets/shopping-cart.png';
//import SearchIcon from "@material-ui/icons/Search";



function NavBar(){
    return (
        /*
        logo
        */
        <nav className='header'>
        <Link to="/">
          <img src={amazon_logo} alt="Description of the image" className='header_logo' />
        </Link>        
        <div className='searchbar'>
          <input type = "text" className='searchbar_input'></input>
        </div>

        <div className='header_nav'>        
          <Link to = '/Login'  className='header_link'>
            <div className="header__option">
              <span className="header__optionLineOne">Hello </span>
              <span className="header__optionLineTwo"> Welcome</span>
            </div>
          </Link>

          {
            /*
            your orders
            */
          }
          <Link to = '/Login'  className='header_link'>
            <div className="header__option">
              <span className="header__optionLineOne">your </span>
              <span className="header__optionLineTwo"> orders</span>
            </div>
          </Link>


          {
            /*
            prime account
            */
          }
        
          <Link to = '/'  className='header_link'>
            <div className="header__option">
              <span className="header__optionLineOne">Your </span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          {
            /*
            contact
            */
          }

          <Link to = '/Contact'  className='header_link'>
            <div className="header__option">
              <span className="header__optionLineOne">Contact </span>

            </div>
          </Link>

          {
            /*

            basket and cart logo
            */
          }

          <Link to = '/Checkout' className='header_link'>
            <div className='header_optionBasket'>
            <img src={basket_logo} alt="Description of the image" className='header_logo' />
              <span className="header__optionLineTwo"> 0</span>


            </div>
          </Link>

        </div>

      </nav>

    );
}

export default NavBar;


