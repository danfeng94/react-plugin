import React, { useState, useEffect } from 'react'

let timer = null;
export default function MyState() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "ZZMX" + count;
  }, [count]);

  useEffect(() => {
    timer = setInterval(() => {
      setCount((oldCount) => oldCount + 1);
    }, 1000);
    return () => {
      document.title = "Love ZZMX";
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  )
}