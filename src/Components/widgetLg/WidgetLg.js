import React, { Fragment } from 'react';
import './widgetLg.css';
import image from '../../images/top1.jpg';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'WidgetLgButton ' + type}> {type} </button>;
  };
  return (
    <Fragment>
      <div className='WidgetLg'>
        <h3 className='WidgetLgTitle'>Latest Transactions</h3>
        <table className='WidgetLgTable'>
          <tr className='WidgetLgTr'>
            <th className='WidgetLgTh'>Customer</th>
            <th className='WidgetLgTh'>Dates</th>
            <th className='WidgetLgTh'>Amount </th>
            <th className='WidgetLgTh'>Status</th>
          </tr>
          <tr className='WidgetLgTr'>
            <td className='WidgetLgUser'>
              <img src={image} alt='' className='WidgetLgImg' />
              <span className='WidgetLgName'>Shahzad</span>
            </td>
            <td className='WidgetLgDate'>2 July 2023</td>
            <td className='WidgetLgAmount'> 50,000 </td>
            <td className='WidgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr className='WidgetLgTr'>
            <td className='WidgetLgUser'>
              <img src={image} alt='' className='WidgetLgImg' />
              <span className='WidgetLgName'>Shahzad</span>
            </td>
            <td className='WidgetLgDate'>2 July 2023</td>
            <td className='WidgetLgAmount'> 50,000 </td>
            <td className='WidgetLgStatus'>
              <Button type='Declined' />
            </td>
          </tr>
          <tr className='WidgetLgTr'>
            <td className='WidgetLgUser'>
              <img src={image} alt='' className='WidgetLgImg' />
              <span className='WidgetLgName'>Shahzad</span>
            </td>
            <td className='WidgetLgDate'>2 July 2023</td>
            <td className='WidgetLgAmount'> 50,000 </td>
            <td className='WidgetLgStatus'>
              <Button type='Pending' />
            </td>
          </tr>
          <tr className='WidgetLgTr'>
            <td className='WidgetLgUser'>
              <img src={image} alt='' className='WidgetLgImg' />
              <span className='WidgetLgName'>Shahzad</span>
            </td>
            <td className='WidgetLgDate'>2 July 2023</td>
            <td className='WidgetLgAmount'> 50,000 </td>
            <td className='WidgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
        </table>
      </div>
    </Fragment>
  );
};

export default WidgetLg;
