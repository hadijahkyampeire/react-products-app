import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { NavBar } from './Navbar';
import { Products } from './Products';
import { SingleProduct } from './SingleProduct/SingleProduct';
import { AddProductForm } from './AddProduct';
import { EditProductForm } from './EditProduct';

const LandingPage = () => <div>
  <Link to='/products' className='btn btn-secondary'>Go To Products</Link>
</div>;

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route exact path='products' element={<Products />} />
          <Route path='products/add' element={<AddProductForm />} />
          <Route path='products/:productId/edit' element={<EditProductForm />} />
          <Route path='products/:productId' element={<SingleProduct/>} />
 
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
