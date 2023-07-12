import { Fragment } from 'react';
import Topbar from './Components/topbar/Topbar';
import Sidebar from './Components/sidebar/Sidebar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <Router>
      <Fragment>
        <Topbar />

        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/newProduct' element={<NewProduct />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
