import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './userList.css';
import image from '../../images/top5.jpg';
import { Delete, DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns  = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImage' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 350 },
    {
      field: 'status',
      headerName: 'Status ',
      width: 110,
    },

    {
      field: 'tansaction',
      headerName: 'Transaction  ',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action  ',
      width: 160,
      renderCell: (params) => {
        return (
          <div className='div'>
            <Link to={'/users/' + params.row.id}>
              <button className='userListEdit'>Edit</button>{' '}
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
