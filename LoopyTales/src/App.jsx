// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './pages/Home'
// import './pages/home.css'
// import Shop from './pages/Shop'
// import './pages/shop.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <Home/>
//         <Shop/>
//       </div>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/productDetails';
import About from './pages/About';
import { CartProvider } from './context/CartContext';
import Heading from './components/header/Heading'; // Your navbar
import './App.css';
import './pages/home.css';
import './pages/shop.css';
import './pages/about.css';
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {/* Wrap your app with CartProvider to provide cart context */}
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
