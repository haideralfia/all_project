import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };

  //fuction to turn count green for positive and red for negative
  const countColor = () => {
    if (number > 0) {
      return 'green';
    } else if (number < 0) {
      return 'red';
    }
    return 'black';
  };

  return (
    <>
      <h1>Counter</h1>
      <div>
        <p style={{ color: countColor() }}>{number}</p>
        <button
          onClick={() => {
            increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
