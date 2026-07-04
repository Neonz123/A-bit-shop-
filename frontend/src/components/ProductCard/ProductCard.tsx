import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { Product } from '../../Types/Products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link to={`/product/${product.id}`} className="product-card-link">
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <div className="product-price">
        <span className="current-price">${Number(product.price).toFixed(2)}</span>
      </div>
      <p className="product-description">{product.description}</p>
      <span className="product-category">{product.category}</span>
    </div>
  </Link>
);

export default ProductCard;