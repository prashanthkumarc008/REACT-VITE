import { useEffect, useState } from 'react';

function UseEff() {
  const [count, setCount] = useState(0);

  // useEffect to update document title when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;

    // Optional cleanup (not strictly needed here)
    return () => {
      document.title = 'React App'; // Reset title on unmount
    };
  }, [count]); // Runs when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEff;