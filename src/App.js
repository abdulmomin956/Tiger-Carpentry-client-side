import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
      </Routes>
    </div>
  );
}

export default App;
