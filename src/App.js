import React from 'react';

import Dashboard from 'components/Dashboard';

import { 
  Header,
  HeaderText, 
  Main 
} from 'ui-kit/App';

function App() {
  return (
    <>
      <Header>
        <HeaderText>Welcome to your dashboard</HeaderText>
      </Header>
      <Main>
        <Dashboard />
      </Main>
    </>
  );
}

export default App;
