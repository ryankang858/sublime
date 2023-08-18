import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

const handleMinusClick = () => {
    const current = count - 1;
    setCount(current)
}

const handlePlusClick = () => {
    const current = count + 1;
    setCount(current)
}

  return (
    <div>
      <button onClick={handleMinusClick}>-</button>
      <div>{count}</div>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
};
