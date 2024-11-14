import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Read the cookie value and set the initial state
    const savedCount = Cookies.get('sharedCount');
    console.log('Initial cookie read:', savedCount);
    setCount(savedCount !== undefined ? parseInt(savedCount, 10) : 0);
  }, []);

  useEffect(() => {
    // Update the cookie value when `count` changes
    console.log('Updating cookie to:', count);
    count && Cookies.set('sharedCount', count, { path: '/' });
    console.log('Updated cookie value:', Cookies.get('sharedCount'));
  }, [count]);

  return (
    <>
      <div>
        <a href="http://localhost:5173/">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="http://localhost:5174/">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Localhost Ports Example</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
