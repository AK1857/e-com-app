import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Products from './pages/Home';
import Layout from './pages/Layout';
import ProductDetail from './pages/ProductDetails';
import CartPage from './pages/cartPage';
import { CartProvider } from './cartContext';


function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/product/:id/details" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;