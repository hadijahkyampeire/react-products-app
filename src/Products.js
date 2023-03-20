import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

export function MiniProduct({ product = {} }) {
  const { id, title, brand, category, description, discountPercentage, price, rating, stock, thumbnail } = product;
  return (
    <div id={id} className='product-card'>
      <Link to={`/products/${id}`} className='view-details'>View Details</Link>
      <div className='product-title'>
        <span><label>Title:</label> {title}</span>
        <span><label>Brand:</label> {brand}</span>
        <span><label>Category:</label> {category}</span>
      </div>
      <div className='description-and-thumbnail'>
        <span><label>Description:</label>{description}</span>
        <img src={thumbnail} alt='thumbnail' width='80px' height='80px' />
      </div>
      <div className='price-section'>
        <div>
          <label>Discount Percentage:</label>
          <span>{discountPercentage}%</span>
        </div>
        <div>
          <label>Price:</label>
          <span>{price}</span>
        </div>
        <div>
          <label>Rating:</label>
          <span>{rating}</span>
        </div>
        <div>
          <label>Stock:</label>
          <span>{stock}</span>
        </div>
      </div>
    </div>
  )
}

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  }, []);

  return (
    <div className='products-section'>
      <h3>A list of my products</h3>
      <Link to='/products/add' role='button' className='btn btn-success'>Add a product</Link>
      <div className='products-list'>
        {products.length ? products.map(product => <MiniProduct product={product} key={product.id} />) : <div>No products available</div>}
      </div>
    </div>
  );
}
