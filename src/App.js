import React from 'react';

import Dashboard from 'components/Dashboard';

function App() {
  return (
    <>
      <header className="header__container">
        <h1 className="header__text">Welcome to your dashboard</h1>
      </header>
      <main className="main__container">
        <Dashboard />
      </main>
    </>
  );
}

export default App;
