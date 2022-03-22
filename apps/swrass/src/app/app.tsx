import React, { useEffect } from 'react';
import Layout from './components/Layout';

export const App = () => {
  useEffect(() => {
    fetch('/api/v1/test').then((r) => console.log(r));
  }, []);

  return (
    <Layout>
      <h1>SWRASS</h1>
    </Layout>
  );
};

export default App;
