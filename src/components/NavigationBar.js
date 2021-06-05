import React from 'react';
import './NavigationBar.css';

export default function NavigationBar(props) {
  return (
    <ul className='navigation-bar'>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/Product'>Product</a>
      </li>
      <li>
        <a href='/Features'>Features</a>
      </li>
      <li>
        <a href='/About'>About</a>
      </li>
      <li>
        <button className='sign-up-button'>Start Testing</button>
      </li>
    </ul>
  );
}
