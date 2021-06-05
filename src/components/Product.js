import React from 'react';
import './Product.css';
import ticketing from '../ticketing.gif';
import navigation from '../navigation.png';
import status from '../status.png';
import reports from '../reports.png';

import { Navigation, BarChart, Activity } from 'react-feather';

export default function Product(props) {
  return (
    <div className='product-container'>
      <section className='header-container'>
        <h1 className='ticketing-header'>About Ticketing..</h1>
      </section>
      <section className='about-ticketing-container'>
        <div className='introduction'>
          <div>
            <br />
            <h1>The essentials of customer support</h1>
            <p>
              Incoming requests can be viewed in different ticket queues, you
              can assign them to your agents, mark them as a priority or change
              their status.
              <br />
              Reply to your customers directly and/or leave internal for agents
              to be notified. <br />
              Above all, it gives you a complete picture of each customer, so
              you can offer the right support.
            </p>
          </div>
        </div>

        <section className='features'>
          <div className='ind-section'>
            <section className='feature-sections'>
              <Navigation color='white' />
              <h3 className='feature-headers'>Navigation</h3>
            </section>
            <p>
              Easily navigate through ticket views whether they are pending,
              open or closed.
            </p>
          </div>
          <div className='ind-section'>
            <div className='feature-sections'>
              <BarChart color='white' />
              <h3 className='feature-headers'>Customer history </h3>
            </div>
            <p>
              See customer's history at glance. Consult past issues and customer
              information.
            </p>
          </div>
          <div className='ind-section'>
            <div className='feature-sections'>
              <Activity color='white' />
              <h3 className='feature-headers'>Reports</h3>
            </div>
            <p>
              Always stay on top of how your customer support is doing. Analyze
              global stats or your team's performance.
            </p>
          </div>
        </section>
      </section>
      <section className='ticket-sample'>
        <div className='image-container'>
          <img src={navigation} alt='navigation' />
          <img src={status} alt='status' />
        </div>
        <div className='feature-container'>
          <div>
            <h3>DELIVER CUSTOMER SATISFACTION</h3>
            <p>
              Never lose a request Whether customers reach out over email, chat,
              phone, or any web, mobile, or social channel, every submission
              creates a ticket and enters a queue. Customers get a notification
              to confirm your support team received the request and that help is
              on the way. Meanwhile, robust tools like routing, CSAT ratings,
              time tracking, service level agreements, and more, ensure your
              agents won’t miss a beat.
            </p>
          </div>
        </div>
      </section>
      <section className='gif-section'>
        <div>
          <h3>FAST & EFFICIENT COMMUNICATION</h3>
          <p>
            See which tickets need attention (FRT), are already worked on or
            need attention. Contextual communcation is essential when it comes
            to delivering great customer experience.
          </p>
        </div>
        <img src={ticketing} alt='ticketing' />
      </section>
      <section className='image-section'>
        <img src={reports} alt='reports' />
        <div className='cheat'></div>
        <img src={status} alt='status' />
      </section>

      <section className='last-section'>
        <h3>FAST & EFFICIENT COMMUNICATION</h3>
        <p>
          See which tickets need attention (FRT), are already worked on or need
          attention. Contextual communcation is essential when it comes to
          delivering great customer experience. See all features in details. See
          which tickets need attention (FRT), are already worked on or need
          attention. Contextual communcation is essential when it comes to
          delivering great customer experience. See all features in details
        </p>
      </section>
    </div>
  );
}
