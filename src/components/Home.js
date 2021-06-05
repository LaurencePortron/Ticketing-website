import React from 'react';
import './Home.css';
import { ArrowRight } from 'react-feather';
import tech from '../tech.png';

export default function Home(props) {
  return (
    <div className='home-container'>
      <div className='container'>
        <div className='text-container'>
          <h1>Beautifully simple</h1>
          <p>
            Customer service at its best!
            <br /> Ticketing is an easy to use ticketing system which allows you
            to fastly reply to customers, distribute tickets across your team
            and see customers' history at a glance!
          </p>
          <div className='try-out-section'>
            <a href='#ticketing' className='try-it-out-ref'>
              Try it out now
            </a>
            <ArrowRight color='white' size={24} />
          </div>
        </div>
        <img src={tech} alt='ticket' />
      </div>
      <div className='description-container'>
        <h1>Ticketing as a first personal project</h1>
        <p>
          This is my first personal project I deployed, coded in
          React.js/Express/MySQL.
        </p>
        <div className='text-container'>
          <div className='intro-challenges-container'>
            <div className='intro'>
              <h3>Brief Intro</h3>
              <p>
                I undertook an intense apprenticipe ship in web & mobile
                development for 6 months. <br />
                <br />
                During this period I primarily became familiar with React.js and
                Node.js. Super Eager to take it to the next level, I started
                programming my first personal project to be deployed.
              </p>
            </div>
            <div className='cheat'></div>
            <div className='challenges'>
              <h3>Challenges</h3>
              <p>
                Learning a coding language itself wasn't the most challenging
                part. I needed to think differently by "restructuring" my entire
                logic:
                <br />
                <br />
                - The most challenging part of this project was to constantly
                organize data throughout the app. I don't know how many times
                rewrote my code as I started added new features. <br />
                <br />- An other challenge was to constantly refactor the code
                I've just written. As a junior developper, you often tend to
                repeat code over several components and sometimes it is a bit
                tricky to figure out how to write re-usable components.
              </p>
            </div>
          </div>
          <div className='conclusion-container'>
            <div className='conclusion'>
              <h3>Conclusion</h3>
              <p>
                Either way, besides progressing by coding this web app, it is
                actually so much fun! <br />
                <br />
                And let's be honest, it can be so frustrating sometimes but when
                it actually works or you start understanding how things get
                together, all the frustration just vanishes and it is the most
                satisfying thing!
              </p>
            </div>
            <div className='cheat'></div>
            <div className='conclusion'>
              <h3>Now let's get started!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
