import React from 'react';
import './Features.css';
import { Check } from 'react-feather';

export default function Testing(props) {
  return (
    <div className='pricing-table'>
      <div className='tableheader'>
        <h1>Free testing!</h1>
        <p>You can see all implemented and upcoming features below</p>
      </div>
      <table>
        <caption>All current & upcoming features</caption>
        <thead>
          <tr>
            <th className='header-features'>Features</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='subheader'>Navigation</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Basic views</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Custom views</td>
            <td></td>
            <td>upcoming</td>
          </tr>
          <tr>
            <th className='subheader'>Tickets</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Ticket Status</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Customer history</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Templates</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Inernal Notes</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Assignments</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Bulk Assignments</td>
            <td></td>
            <td>upcoming</td>
          </tr>
          <tr>
            <td>Ticket Priority</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <th className='subheader'>Stats</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Reports</td>
            <td>
              <Check color='white' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Custom Reports</td>
            <td></td>
            <td>upcoming</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
