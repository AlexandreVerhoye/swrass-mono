import SEO from '@components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch: React.FC = () => {
  return (
    <>
      <SEO title="404 NOT FOUND" />
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go back to home</Link>
      </p>
    </>
  );
};

export default NoMatch;
