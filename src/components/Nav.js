import React from 'react';
import '../styles/nav.css';
import icon from '../images/fill-213.png';

const Nav = () => {
  return (
    <div className='nav'>
      <img src={icon} />
      <p>My Travel Journal</p>
    </div>
  );
};

export default Nav;
