import React, { useState } from 'react';

// Mock library that calls a callback with its own `this` context
const timer = {
  setTimer(callback) {
    setTimeout(() => callback.call({ name: 'Timer' }), 1000);
  },
};

function Callbb() {
  const [text, setText] = useState('Waiting...');

  // Callback function
  function onTimer() {
    setText(`Called from ${this.source}`);
  }

 

  // Register callback with timer
  const startTimer = () => {
    timer.setTimer(onTimer.bind({ source: 'App' }));
    setText('Timer started...');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
}

export default Callbb;