import React from 'react';
import { Helmet } from 'react-helmet';

type SEOProps = {
  title: string;
};

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | SWRASS</title>
    </Helmet>
  );
};

export default SEO;
