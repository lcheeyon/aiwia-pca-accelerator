import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHreflangProps {
  currentPath: string;
  alternateLanguages?: Array<{
    lang: string;
    url: string;
  }>;
}

const SEOHreflang: React.FC<SEOHreflangProps> = ({ 
  currentPath, 
  alternateLanguages = [] 
}) => {
  // Default to English and x-default for current domain
  const defaultAlternates = [
    { lang: 'en', url: currentPath },
    { lang: 'x-default', url: currentPath }
  ];

  const allAlternates = alternateLanguages.length > 0 ? alternateLanguages : defaultAlternates;

  return (
    <Helmet>
      {allAlternates.map((alternate) => (
        <link
          key={alternate.lang}
          rel="alternate"
          hrefLang={alternate.lang}
          href={`https://aiwia.app${alternate.url}`}
        />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://aiwia.app${currentPath}`} />
      
      {/* Additional regional targeting meta tags */}
      <meta name="geo.region" content="SG" />
      <meta name="geo.placename" content="Singapore" />
      <meta name="geo.position" content="1.290270;103.851959" />
      <meta name="ICBM" content="1.290270, 103.851959" />
    </Helmet>
  );
};

export default SEOHreflang;