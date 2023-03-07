// React
import React, { useState } from 'react';
// CSS
import '../styles/Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='counter-box'>
      <div className='count'>
        {count}
      </div>
      <div className='button-box'>
        <button onClick={addCount}>
          Sumar reunión
        </button>
      </div>
    </div>
  );
};

export default Counter;
