import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import { allProductsData, Product } from '../Types/Products';
import { useEffect } from 'react';

 
const Shop: React.FC = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const products = allProductsData;
  const menProducts = products.filter(
    p => p.category && p.category.toLowerCase().startsWith('men')
  );
  const womenProducts = products.filter(
    p => p.category && p.category.toLowerCase().startsWith('women')
  );
  const kidsProducts = products.filter(
    p => p.category && p.category.toLowerCase().startsWith('kids')
  );
  return (
    <div className="shop-page">
      <Section title="Men" products={menProducts} sectionType="men" />
      <Section title="Women" products={womenProducts} sectionType="women" />
      <Section title="Kids" products={kidsProducts} sectionType="kids" />
    </div>
  );
};

const Section: React.FC<{ title: string; products: Product[]; sectionType: 'men' | 'women' | 'kids' }> = ({ title, products, sectionType }) => (
  <section className={`shop-section shop-section-${sectionType}`}>
    <h2 className={`shop-section-title shop-section-title-${sectionType}`}>
      {sectionType === 'men' && <span className="section-icon">👔</span>}
      {sectionType === 'women' && <span className="section-icon">👗</span>}
      {sectionType === 'kids' && <span className="section-icon">🧒</span>}
      {title}
    </h2>
    <div className="product-grid">
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
          <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${Number(product.price).toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Shop;