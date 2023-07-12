import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './productList.css';
import image from '../../images/top5.jpg';
import { Delete, DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../DummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 240,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImage' src={params.row.image} alt='' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 150 },
    {
      field: 'status',
      headerName: 'Status ',
      width: 180,
    },

    {
      field: 'price',
      headerName: 'Price  ',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action  ',
      width: 160,
      renderCell: (params) => {
        return (
          <div className='div'>
            <Link to={'/products/' + params.row.id}>
              <button className='productListEdit'>Edit</button>{' '}
            </Link>
            <DeleteOutline
              className='productListDelete'
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

export default ProductList;
