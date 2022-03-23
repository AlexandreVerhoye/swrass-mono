import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch: React.FC = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go back to home</Link>
      </p>
    </div>
  );
};

export default NoMatch;
