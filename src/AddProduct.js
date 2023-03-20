import React, { useState } from 'react';

import './AddProduct.css';

export function AddProductForm() {
  const initialState = { title: '', brand: '', category: '', description: '', price: 0, rating: 0, stock: 0, discountPrice: 0, thumbnail: '', images: [] };
  const [productData, setProductData] = useState(initialState);

  const [showAlert, setShowAlert] = useState(false);

  console.log(productData, 'state');

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductData({ ...productData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...productData})
    })
    .then(res => res.json())
    .then(d => setShowAlert(true));
  }

  return (
    <div className='add-product-form'>
      {showAlert ? 
        <div class="alert alert-success" role="alert">
          Product successfully saved, please view it on your dashboard!
        </div> 
      : null}
      <h3>Add product</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlhtmlFor="title">Title</label>
        <input type="text" className="form-control" name='title' id="title" aria-describedby="title" placeholder="Enter product title" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input type="text" className="form-control" name='category' id="category" aria-describedby="category" placeholder="Enter product category" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <input type="text" className="form-control" name='brand' id="brand" aria-describedby="brand" placeholder="Enter product brand" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" className="form-control"  name='description' id="description" aria-describedby="description" placeholder="Enter product description" onChange={(e) => handleInputChange(e)} />
      </div>
 
      <div className="form-group">
        <label htmlFor="discount">Discount</label>
        <input type="number" className="form-control" name='discountPrice' id="discount" aria-describedby="discount" placeholder="Enter product discount" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="rate">Rating</label>
        <input type="number" className="form-control"  name='rating' id="rate" aria-describedby="rate" placeholder="Enter product rate" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input type="number" className="form-control" name='price' id="price" aria-describedby="price" placeholder="Enter product price" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="stock">Stock</label>
        <input type="number" className="form-control" name='stock' id="stock" aria-describedby="stock" placeholder="Enter product stock" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="thumbnail">Thumbnail Image Link</label>
        <input type="text" className="form-control" name='thumbnail' id="thumbnail" aria-describedby="thumbnail" placeholder="Enter product thumbnail" onChange={(e) => handleInputChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="images">Product Images</label>
        <textarea type="text" className="form-control" name='images' id="images" aria-describedby="images" placeholder="Enter product images"  onChange={(e) => handleInputChange(e)}/>
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    </div>
  )
}