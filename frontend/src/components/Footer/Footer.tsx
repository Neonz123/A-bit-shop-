import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="footer-wrapper">
            <footer className="footer-main">
                {/* Newsletter Section */}
                <div className="newsletter-section">
                    <div className="newsletter-text-container">
                        <h2 className="newsletter-title">
                            STAY UPTO DATE ABOUT OUR <br className="hidden-br" /> LATEST OFFERS
                        </h2>
                    </div>
                    <div className="newsletter-form-container">
                        <div className="input-wrapper">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="ph-fill ph-envelope">
                                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-6.57,6.86L128,124.23,38.57,54.86a8,8,0,1,1,8.86-11.72L128,107.77l80.57-64.63a8,8,0,1,1,8.86,11.72ZM216,200H40V68.82L128,137.23,216,68.82V200Z"></path>
                                </svg>
                            </div>
                            <input type="email" placeholder="Enter your email address" className="email-input" />
                        </div>
                        <button className="subscribe-button">Subscribe to Newsletter</button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="footer-links-container">
                    <div className="links-grid">
                        <div className="footer-column-big">
                            <h3 className="footer-title">SHOP.CO</h3>
                            <p className="footer-description">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                            <div className="social-icons">
                                <div className="social-icon-wrapper"><i className="ph ph-twitter-logo social-icon"></i></div>
                                <div className="social-icon-wrapper"><i className="ph ph-facebook-logo social-icon"></i></div>
                                <div className="social-icon-wrapper"><i className="ph ph-instagram-logo social-icon"></i></div>
                                <div className="social-icon-wrapper"><i className="ph ph-github-logo social-icon"></i></div>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h4 className="column-title">COMPANY</h4>
                            <ul className="links-list">
                                <li><a href="#" className="link-item">About</a></li>
                                <li><a href="#" className="link-item">Features</a></li>
                                <li><a href="#" className="link-item">Works</a></li>
                                <li><a href="#" className="link-item">Career</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="column-title">HELP</h4>
                            <ul className="links-list">
                                <li><a href="#" className="link-item">Customer Support</a></li>
                                <li><a href="#" className="link-item">Delivery Details</a></li>
                                <li><a href="#" className="link-item">Terms & Conditions</a></li>
                                <li><a href="#" className="link-item">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="column-title">FAQ</h4>
                            <ul className="links-list">
                                <li><a href="#" className="link-item">Account</a></li>
                                <li><a href="#" className="link-item">Manage Deliveries</a></li>
                                <li><a href="#" className="link-item">Orders</a></li>
                                <li><a href="#" className="link-item">Payments</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="column-title">RESOURCES</h4>
                            <ul className="links-list">
                                <li><a href="#" className="link-item">Free eBooks</a></li>
                                <li><a href="#" className="link-item">Development Tutorial</a></li>
                                <li><a href="#" className="link-item">How to - Blog</a></li>
                                <li><a href="#" className="link-item">Youtube Playlist</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright-section">
                        <div className="copyright-text">Shop.co &copy; 2000–2023, All Rights Reserved</div>
                        <div className="payment-icons">
                            <img src="https://placehold.co/40x25/ffffff/000000?text=VISA" alt="Visa" className="payment-icon" />
                            <img src="https://placehold.co/40x25/ffffff/000000?text=PayPal" alt="PayPal" className="payment-icon" />
                            <img src="https://placehold.co/40x25/ffffff/000000?text=G%20Pay" alt="G Pay" className="payment-icon" />
                            <img src="https://placehold.co/40x25/ffffff/000000?text=Apple%20Pay" alt="Apple Pay" className="payment-icon" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
