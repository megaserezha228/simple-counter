import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counter">
        <h1>Счётчик кликов</h1>
        <div className="count-display">{count}</div>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)} className="btn btn-decrement">
            -1
          </button>
          <button onClick={() => setCount(0)} className="btn btn-reset">
            Сброс
          </button>
          <button onClick={() => setCount(count + 1)} className="btn btn-increment">
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;