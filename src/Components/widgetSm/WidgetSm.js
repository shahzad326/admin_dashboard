import React, { Fragment } from 'react';
import i from '../../images/top2.jpg';
import './widgetSm.css';
import z from '../../images/top1.jpg';
import { Visibility } from '@mui/icons-material';

const WidgetSm = () => {
  return (
    <Fragment>
      <div className='widgetSm'>
        <span className='widgetSmTitle'>New Join Memebrs</span>
        <ul className='widgetSmList'>
          <li className='widgetSmListItem'>
            <img src={i} alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUserName'>Shahzad Ali Raja</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img src={z} alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUserName'>Shahzad Ali Raja</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img src={i} alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUserName'>Shahzad Ali Raja</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img src={i} alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUserName'>Shahzad Ali Raja</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img src={i} alt='' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUserName'>Shahzad Ali Raja</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default WidgetSm;
