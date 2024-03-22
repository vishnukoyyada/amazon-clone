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
import image from '../../assets/amazon_logo.png';
//import SearchIcon from "@material-ui/icons/Search";



function NavBar(){
    return (
        /*
        logo
        */
        <nav className='header'>
        <Link to="/">
          <img src={image} alt="Description of the image" className='header_logo' />
        </Link>
        
        <div className='searchbar'>
        <input type = "text" className='searchbar_input'></input>
    
        </div>

      </nav>

    );
}

export default NavBar;


