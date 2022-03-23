import React, { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    fetch('/api/v1/test').then((r) => console.log(r));
  }, []);

  return (
    <MainLayout>
      <TitleContainer>
        <Image src={logoAllianceRebel} />
        <h1>Star Wars Rebels Alliance Search System</h1>
      </TitleContainer>
      <Searchbox callback={(data) => console.log('Data from app.tsx' + data)} />
    </MainLayout>
  );
};

export default App;
