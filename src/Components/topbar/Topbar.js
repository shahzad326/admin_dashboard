import React from 'react';
import './topbar.css';
import { Avatar, ratingClasses } from '@mui/material';
import i from '../../images/i.jpeg';
import { Language, NotificationAdd, Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Shahzad</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconsContainer'>
            <NotificationAdd />
            <span className='topIconBadge'>2</span>
          </div>

          <div className='topbarIconsContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>

          <div className='topbarIconsContainer'>
            <Settings />
          </div>

          <img src={i} alt='' className='topAvatar' />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
