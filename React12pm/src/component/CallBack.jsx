import React from 'react';

function CallBack() {
  const myDisplayer = (some) => {
    return <div id="demo">{some}</div>;
  };

  const myCalculator = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
  };

  let result = myCalculator(5, 5);

  return (
    <div>
      {myDisplayer(result)}
    </div>
  );
}

export default CallBack;