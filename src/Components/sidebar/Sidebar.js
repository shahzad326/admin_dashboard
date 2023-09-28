import React, { Fragment } from 'react';
import './sidebar.css';
import {
  Home,
  ShowChart,
  Timeline,
  PermIdentity,
  Inventory,
  MonetizationOn,
  ReportGmailerrorred,
  MailOutlineOutlined,
  FeedbackOutlined,
  Message,
  ManageAccounts,
  Analytics,
  Report,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Fragment>
      <div className='sidebar'>
        <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Dashboard</h3>
            <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem active'>
                <Home className='sidebarIcon' /> Home
                </li>
                </Link>

              <Link to='/analytics' className='link'>
                <li className='sidebarListItem'>
                  <ShowChart /> Analytics
                </li>
              </Link>

              <Link to='/sales' className='link'>
              <li className='sidebarListItem'>
                <Timeline /> Sales
              </li>
              </Link>
            </ul>
            </div>
          

          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Quick Menu </h3>
            <ul className='sidebarList'>
              <Link to='/users' className='link'>
                <li className='sidebarListItem '>
                  <PermIdentity className='sidebarIcon' /> User
                </li>
              </Link>
              <Link to='/products' className='link'>
                <li className='sidebarListItem'>
                  <Inventory /> Products
                </li>
              </Link>

              <Link to='/sales' className='link'>
              <li className='sidebarListItem'>
                <MonetizationOn /> Transactions
              </li>
              </Link>

              <Link to='/reports' className='link'>
              <li className='sidebarListItem'>
                <ReportGmailerrorred /> Reports
              </li>
              </Link>
            </ul>
          </div>

          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
            <Link to='/mail' className='link'>
              <li className='sidebarListItem '>
                <MailOutlineOutlined className='sidebarIcon' /> Mail
              </li>
              </Link>

              <Link to='/feedbacks' className='link'>
              <li className='sidebarListItem'>
                <FeedbackOutlined /> Feedbacks
              </li>
              </Link>

<Link to='/messages' className='link'>
              <li className='sidebarListItem'>
                <Message /> Messages
              </li>
              </Link>
            </ul>
          </div>

          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Staff</h3>
            <ul className='sidebarList'>
            <Link to='/manage' className='link'>
              <li className='sidebarListItem '>
                <ManageAccounts className='sidebarIcon' /> Manage
              </li>
              </Link>

              <Link to='/reports' className='link'>
              <li className='sidebarListItem'>
                <Report className='sidebarIcon' />
                Reports
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
