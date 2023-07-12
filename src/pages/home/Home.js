import React, { Fragment } from 'react';
import './home.css';
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo';
import Chart from '../../Components/chart/Chart';
import { userData } from '../../DummyData';
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import WidgetLg from '../../Components/widgetLg/WidgetLg';

const Home = () => {
  return (
    <Fragment>
      <div className='home'>
        {' '}
        <FeaturedInfo />
        <Chart
          data={userData}
          title='User Analytics '
          grid
          dataKey='Active User'
        />
        <div className='homeWidgets'>
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
