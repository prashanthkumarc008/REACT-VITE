import React, { useState, useEffect } from 'react';

function UseReff() {
  const [count, setCount] = useState(0);

  // This useEffect will run after the initial render,
  // AND any time the 'count' state changes.
  useEffect(() => {
    document.title = `You clicked ${count} times`; // Diplays on title bar.
    console.log(`Effect ran: Title updated to reflect ${count} clicks.`);

    // Optional cleanup (less relevant for document.title, but good for e.g., timers)
    return () => {
      console.log(`Cleanup before next effect or unmount. Current count was ${count}`);
    };
  }, [count]); // <-- Dependency: 'count'. Re-run effect when 'count' changes.

  return (
    <div>
      <p>You clicked {count} times (check the browser tab title!).</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseReff;