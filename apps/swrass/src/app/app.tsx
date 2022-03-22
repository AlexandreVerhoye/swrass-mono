import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    fetch('/api/v1/test').then((r) => console.log(r));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to swrass!</h1>
      <img
        width="450"
        src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        alt="Nx - Smart, Fast and Extensible Build System"
      />
    </div>
  );
};

export default App;
