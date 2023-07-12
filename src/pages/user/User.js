import React from 'react';
import './user.css';
import {
  CalendarMonth,
  LocationSearching,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>

      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://tse2.mm.bing.net/th?id=OIP.C69s0yEXXyH5JrVvd_zQqwHaF7&pid=Api&P=0&h=180'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUserName'>Shahzad Ali </span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>Shahzad 302</span>
            </div>
            <div className='userShowInfo'>
              <CalendarMonth className='userShowIcon' />
              <span className='userShowInfoTitle'> 9 June 2022 </span>
            </div>

            <span className='userShowTitle'>Contact Details</span>

            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+92 348 5609661</span>
            </div>

            <div className='userShowInfo'>
              <MailOutlined className='userShowIcon' />
              <span className='userShowInfoTitle'>
                shahzadaliraja302@gmail.com{' '}
              </span>
            </div>

            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>
                Mohallah Ghoussia Tehsil Jand District Attock
              </span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>

          <form action='' className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label> User Name </label>
                <input
                  type='text'
                  placeholder='Shahzad 302'
                  className='userUpdateInput'
                  name=''
                  id=''
                />
              </div>

              <div className='userUpdateItem'>
                <label> Full Name </label>
                <input
                  type='text'
                  placeholder='Shahzad Ali Raja'
                  className='userUpdateInput'
                  name=''
                  id=''
                />
              </div>

              <div className='userUpdateItem'>
                <label> Email </label>
                <input
                  type='email'
                  placeholder=' shahzadaliraja302@gmail.com'
                  className='userUpdateInput'
                  name=''
                  id=''
                />
              </div>

              <div className='userUpdateItem'>
                <label> Phone </label>
                <input
                  type='text'
                  placeholder='+92 348 5609661'
                  className='userUpdateInput'
                  name=''
                  id=''
                />
              </div>

              <div className='userUpdateItem'>
                <label> Adress </label>
                <input
                  type='text'
                  placeholder='  Mohallah Ghoussia Tehsil Jand District Attock'
                  className='userUpdateInput'
                  name=''
                  id=''
                />
              </div>
            </div>

            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://tse2.mm.bing.net/th?id=OIP.C69s0yEXXyH5JrVvd_zQqwHaF7&pid=Api&P=0&h=180'
                  alt=''
                  className='userUpdateImg'
                />

                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
