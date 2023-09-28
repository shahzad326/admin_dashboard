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
import Analytic from './screens/analytic/Analytic';
import Sales from './screens/sales/Sales';
import Analytics from './pages/analytics/Analytics';
import Transaction from './screens/transaction/Transaction';
import Reports from './screens/reports/Reports';
import Feedback from './screens/feedback/Feedback';
import Mail from './screens/mail/Mail';
import Message from './screens/message/Message';
import Manage from './screens/manage/Manage';
import ReportsStaff from './screens/reportsStaff/ReportsStaff';

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
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/transaction' element={<Transaction />} />

            <Route path='/reports' element={<Reports />} />
            <Route path='/feedbacks' element={<Feedback />} />
            <Route path='/mail' element={<Mail />} />
            <Route path='/messages' element={<Message />} />
            <Route path='/manage' element={<Manage />} />
            <Route path='/messages' element={<ReportsStaff />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
