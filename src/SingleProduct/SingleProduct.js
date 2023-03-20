import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import './SingleProduct.css';


const Images = ({ images = [], activeImageIndex, setActiveImageIndex }) => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      {images.map((image, i) => 
      <div class={"carousel-item " + (activeImageIndex === i && "active")} key={i}>
        <img class="d-block w-100" src={image} alt="slide" width="150px" height="20rem" />
      </div>)}
    </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={() => {
          activeImageIndex === 0
            ? setActiveImageIndex(images.length - 1)
            : setActiveImageIndex(activeImageIndex - 1);
        }}>
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"  onClick={() => {
            activeImageIndex === images.length - 1
              ? setActiveImageIndex(0)
              : setActiveImageIndex(activeImageIndex + 1);
          }}>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
  </div>
  );
};

export function SingleProduct() {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.productId}`)
    .then(res => res.json())
    .then(data => setProduct(data));
  }, [params]);


  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { id, title, brand, category, description, discountPercentage, price, rating, stock, thumbnail, images } = product;
  return (
    !product ? <div>Loading product</div> 
    : <div id={id} className='single-product-card'>
      <div className='product-title'>
        <span><label>Viewing:</label> {title}</span>
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
      <Images images={images} activeImageIndex={activeImageIndex} setActiveImageIndex={setActiveImageIndex} />

      <div className='action-buttons'>
        <Link to={`/product/${id}/edit`} className='edit-product'>Edit</Link>
        <Link to={`/product/${id}`} className='delete-product'>Delete</Link>
      </div>
    </div>
  )
}
