import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/home';
import Buy from './pages/Buy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/buy' element={<Buy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
