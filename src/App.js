import React from 'react';

import Posts from './components/Posts';
import './App.css';

const App = () => {
  return (
  <div>
    <header class="header">
      <h1>The Blog</h1>
    </header>
    <main className="main columns">
      <Posts />
    </main>
  </div>
  );
}

export default App;
