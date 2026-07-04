import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'; 
import './ProductList.css'; 
import { Product } from '../../Types/Products';
import { useNavigate } from 'react-router-dom';

export interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleViewAll = () => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate('/shop');
      setLoading(false);
    }, 500); // Simulate loading delay
  };

  return (
    <section className="product-list-section">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all-button" onClick={handleViewAll} disabled={loading}>
          {loading ? 'Loading...' : 'View All'}
        </button>
      </div>
    </section>
  );
};

export default ProductList;