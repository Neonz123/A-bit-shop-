import React from 'react';
import Hero from '../components/Hero/Hero';
import BrandLogos from '../components/BrandLogo/BrandLogo';
import ProductList from '../components/ProductList/ProductList';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import './Home.css';
import { NewArrivalsProduct } from '../Types/Products';
import { TopSelling } from '../Types/Products';
import BrowseByStyle from '../components/BrowseStyle/BrowseStyle';
import NewsletterSubscription from '../components/NewsletterSubscription/NewsletterSubscription';
import Footer from '../components/Footer/Footer';



const  NewArrivalsProducts = NewArrivalsProduct;
const topSellingProducts =  TopSelling

const Home = () => (

  <div className="home-page-wrapper">
    <Hero />
    <BrandLogos />
    <SectionTitle title="NEW ARRIVALS" />
    <ProductList products={NewArrivalsProducts} />
    <SectionTitle title="TOP SELLING" />
    <ProductList products={topSellingProducts} />
    <BrowseByStyle />
    <NewsletterSubscription />
    <Footer />
    
  </div>
);

export default Home;