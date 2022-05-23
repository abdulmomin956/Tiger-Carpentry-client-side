import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Portfolio from './pages/Portfolio/Portfolio';
import Purchase from './pages/Purchase/Purchase';
import NavBar from './pages/shared/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
