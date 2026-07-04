// ===========================================
// src/components/BrowseByStyle.tsx
// Component for "Browse By Dress Style" section
// ===========================================
import React from 'react';
import './BrowseStyle.css'; // For specific styling

interface StyleCategoryProps {
  title: string;
  imageUrl: string;
  altText: string;
  className?: string; // Optional for specific styling on cards
}

const StyleCategoryCard: React.FC<StyleCategoryProps> = ({ title, imageUrl, altText, className }) => {
  return (
    <div className={`style-category-card ${className || ''}`}>
      <img src={imageUrl} alt={altText} className="style-category-image" />
      <h3 className="style-category-title">{title}</h3>
    </div>
  );
};

const BrowseByStyle: React.FC = () => {
  // Using placeholder images that mimic the aspect ratio of your screenshot
  // REMEMBER TO REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS (e.g., /images/casual.jpg)
  const categories = {
    topRow: [
      { id: 1, title: 'Casual', imageUrl: 'https://placehold.co/300x350/ffffff/333333?text=Casual', altText: 'Man in casual outfit' },
      { id: 2, title: 'Formal', imageUrl: 'https://placehold.co/300x350/ffffff/333333?text=Formal', altText: 'Man in formal outfit' },
    ],
    bottomRow: [
      { id: 3, title: 'Party', imageUrl: 'https://placehold.co/500x350/ffffff/333333?text=Party', altText: 'Woman in party outfit' }, // Wider image
      { id: 4, title: 'Gym', imageUrl: 'https://placehold.co/200x350/ffffff/333333?text=Gym', altText: 'Man in gym outfit' },
    ]
  };

  return (
    <section className="browse-by-style-section">
      <div className="browse-by-style-content-wrapper">
        <h2 className="section-title text-center mb-8">BROWSE BY DRESS STYLE</h2>
        <div className="style-categories-grid">
          <div className="top-row-grid">
            {categories.topRow.map(category => (
              <StyleCategoryCard
                key={category.id}
                title={category.title}
                imageUrl={category.imageUrl}
                altText={category.altText}
              />
            ))}
          </div>
          <div className="bottom-row-grid">
            {categories.bottomRow.map(category => (
              <StyleCategoryCard
                key={category.id}
                title={category.title}
                imageUrl={category.imageUrl}
                altText={category.altText}
                className={category.title === 'Party' ? 'party-card' : ''} // Add class for Party card
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;