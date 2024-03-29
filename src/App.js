import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import auth from './firebase.init';
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
import Payment from './pages/Purchase/Payment';
import PlacedSuccess from './pages/Purchase/PlacedSuccess';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/shared/Footer';
import NavBar from './pages/shared/NavBar';
import NotAdmin from './pages/shared/NotAdmin';
import NotFound from './pages/shared/NotFound';
import RequireAdmin from './pages/shared/RequireAdmin';
import RequireAuth from './pages/shared/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import EditProfile from './pages/Dashboard/EditProfile';
import LoadSpinner from './pages/shared/LoadSpinner';
import Tiger from './Tiger';



function App() {
  const [user, loading, error] = useAuthState(auth);
  const isTrue = !!user;

  const userDat = useQuery(['users', user?.email], () => fetch(`https://tiger-carpentry-server-side-production.up.railway.app/users/${user?.email}`)
    .then(res => res.json())
    , { enabled: isTrue }
  )

  if (loading || userDat.isLoading) {
    return <div className='h-screen flex justify-center items-center'>
      <LoadSpinner></LoadSpinner>
    </div>
  }



  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/link/tiger' element={<Tiger />}></Route>
        <Route path='edit-profile' element={
          <RequireAuth>
            <EditProfile user={user} isTrue={isTrue}></EditProfile>
          </RequireAuth>
        }></Route>
        <Route path='/purchase-success' element={
          <RequireAuth>
            <PlacedSuccess></PlacedSuccess>
          </RequireAuth>
        }></Route>
        <Route path='/payment/:id' element={
          <RequireAuth>
            <Payment user={user} />
          </RequireAuth>
        }></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase user={user} userDat={userDat} />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard userData={userDat}>
            </Dashboard>
          </RequireAuth>
        }>

          {
            userDat?.data?.role !== 'admin' && <Route path='/dashboard/' element={<MyOrders user={user}></MyOrders>}></Route>
          }
          <Route path='/dashboard/add-review' element={
            <NotAdmin userDat={userDat} fireDat={loading}>
              <AddReview user={user}></AddReview>
            </NotAdmin>
          }></Route>
          <Route path='/dashboard/my-profile' element={<MyProfile user={user} />}></Route>
          {
            userDat?.data?.role === 'admin' && <Route path='/dashboard/' element={
              <RequireAdmin userDat={userDat} fireDat={loading}>
                <ManageOrders />
              </RequireAdmin>
            }></Route>
          }
          <Route path='/dashboard/add-product' element={
            <RequireAdmin userDat={userDat} fireDat={loading}>
              <AddProduct />
            </RequireAdmin>
          }></Route>
          <Route path='/dashboard/make-admin' element={
            <RequireAdmin userDat={userDat} fireDat={loading}>
              <MakeAdmin />
            </RequireAdmin>
          }></Route>
          <Route path='/dashboard/manage-products' element={
            <RequireAdmin userDat={userDat} fireDat={loading}>
              <ManageProducts />
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
