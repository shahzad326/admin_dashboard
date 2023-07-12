import React, { Fragment } from 'react';
import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <Fragment>
      <div className='featured'>
        <div className='featuredItem'>
          <span className='featuredTitle'> Revenue</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,425</span>
            <span className='featuredMoneyRate'>
              -11.4 <ArrowDownward className='featuredIcon negative' />{' '}
            </span>
          </div>
          <span className='featuredSub'>Compared to Last Months</span>
        </div>

        <div className='featuredItem'>
          <span className='featuredTitle'> Sales </span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$4,415</span>
            <span className='featuredMoneyRate'>
              -1.4 <ArrowDownward className='featuredIcon negative' />{' '}
            </span>
          </div>
          <span className='featuredSub'>Compared to Last Months</span>
        </div>

        <div className='featuredItem'>
          <span className='featuredTitle'> Cost </span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,225</span>
            <span className='featuredMoneyRate'>
              +2.4 <ArrowUpward className='featuredIcon' />{' '}
            </span>
          </div>
          <span className='featuredSub'>Compared to Last Months</span>
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedInfo;
