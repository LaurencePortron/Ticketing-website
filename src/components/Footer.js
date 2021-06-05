import React from 'react';
import './Footer.css';
import { GitHub, Linkedin, ArrowRight } from 'react-feather';

export default function Footer(props) {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <ul>
          <li>
            <h3>Navigation</h3>
            <a href='/'>Home</a>
            <a href='/Product'>Product</a>
            <a href='/Features'>Features</a>
            <a href='/About'>About</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Social Media</h3>
            <div className='icons'>
              <GitHub size={20} />
              <a href='https://github.com/LaurencePortron'>Github</a>
            </div>
            <div className='icons'>
              <Linkedin size={20} />
              <a href='https://www.linkedin.com/in/laurenceportron/'>
                Linkedin
              </a>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Start Testing</h3>
            <div className='button-container'>
              <p>Go To Ticketing</p>
              <ArrowRight color='#30364b' size={15} />
            </div>
          </li>
        </ul>
      </div>
      <div className='footer-bottom'>
        <div className='modal'>
          <h3>Contact</h3>
          <p>Hey! Send me feedback :)</p>
          <form action=''>
            <label htmlFor='email' hidden>
              Email
            </label>
            <input type='email' name='email' placeholder='Enter your email' />
            <button className='btn' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
