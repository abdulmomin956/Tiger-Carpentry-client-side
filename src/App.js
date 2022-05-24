import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Portfolio from './pages/Portfolio/Portfolio';
import Purchase from './pages/Purchase/Purchase';
import NavBar from './pages/shared/NavBar';
import NotFound from './pages/shared/NotFound';
import RequireAuth from './pages/shared/RequireAuth';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard >
            </Dashboard>
          </RequireAuth>
        }>

          <Route path='/dashboard/' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/add-review' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/my-profile' element={<MyProfile />}></Route>
          <Route path='/dashboard/manage-orders' element={<ManageOrders />}></Route>
          <Route path='/dashboard/add-product' element={<AddProduct />}></Route>
          <Route path='/dashboard/make-admin' element={<MakeAdmin />}></Route>
          <Route path='/dashboard/manage-products' element={<ManageProducts />}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
