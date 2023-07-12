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
              <li className='sidebarListItem active'>
                <Home className='sidebarIcon' /> Home
              </li>

              <li className='sidebarListItem'>
                <ShowChart /> Analytics
              </li>

              <li className='sidebarListItem'>
                <Timeline /> Sales
              </li>
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

              <li className='sidebarListItem'>
                <MonetizationOn /> Transactions
              </li>

              <li className='sidebarListItem'>
                <ReportGmailerrorred /> Reports
              </li>
            </ul>
          </div>

          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem '>
                <MailOutlineOutlined className='sidebarIcon' /> Mail
              </li>

              <li className='sidebarListItem'>
                <FeedbackOutlined /> Feedbacks
              </li>

              <li className='sidebarListItem'>
                <Message /> Messages
              </li>
            </ul>
          </div>

          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'> Staff</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem '>
                <ManageAccounts className='sidebarIcon' /> Manage
              </li>

              <li className='sidebarListItem'>
                <Analytics className='sidebarIcon' /> Analytics
              </li>

              <li className='sidebarListItem'>
                <Report className='sidebarIcon' />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
