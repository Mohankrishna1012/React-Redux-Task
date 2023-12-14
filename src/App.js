import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <NavBar />


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>




      </BrowserRouter>

    </>
  );
}

export default App;