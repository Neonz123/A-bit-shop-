import React from 'react';
import './SectionTitle.css'; // Import SectionTitle specific CSS

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="section-title">{title.toUpperCase()}</h2>
  );
};

export default SectionTitle;