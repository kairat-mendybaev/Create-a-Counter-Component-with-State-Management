import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  const handleIncrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleCorrectIncrementTwice = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrementAfterDelay}>Increment After Delay</button>
      <button onClick={handleIncrementTwice}>Increment Twice</button>
      <button onClick={handleCorrectIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
}

export default Counter;
