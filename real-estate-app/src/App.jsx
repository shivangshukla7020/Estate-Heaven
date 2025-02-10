import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/home';
import Buy from './pages/Buy';
import AuthProvider from "./context/AuthContext";
import Sell from './pages/Sell';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/sell' element={<Sell/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
