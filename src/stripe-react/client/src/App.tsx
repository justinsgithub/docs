import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/home-page'
import { NotFound } from './components/not-found'
import { Shop } from './pages/shop/shop';
import { SingleProduct } from './components/single-product/single-product';
import './App.scss';
import { Checkout } from './components/checkout/checkout'
import { CartPage } from './pages/cart-page/cart-page';

const App: React.FC = ()  => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/product/:id' element={<SingleProduct />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
