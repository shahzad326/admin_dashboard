import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../Components/chart/Chart';
import { productData } from '../../DummyData';
import { Publish } from '@mui/icons-material';

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://nypost.com/wp-content/uploads/sites/2/2020/11/Apple-AirPods-Pro.jpg?quality=90&strip=all'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>

            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>2344</span>
            </div>

            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>

            <div className='productInfoItem'>
              <span className='productInfoKey'>instock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Apple Airpos' />

            <label> In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>

            <label> Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>

          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://nypost.com/wp-content/uploads/sites/2/2020/11/Apple-AirPods-Pro.jpg?quality=90&strip=all'
                alt=''
                className='productUploadImg'
              />

              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
