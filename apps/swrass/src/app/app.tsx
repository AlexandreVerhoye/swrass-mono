import Landing from '@pages/Landing';
import NoMatch from '@pages/NoMatch';
import SearchPage from '@pages/SearchPage';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  useEffect(() => {
    fetch('/api/v1/test').then((r) => console.log(r));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<SearchPage />} />
      {/* <Route path="about" element={<About />} /> */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
