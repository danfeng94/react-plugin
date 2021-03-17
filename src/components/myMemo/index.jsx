import React, {useMemo, useState} from 'react';

const MyUseMemo = () => {
  const [count, setCount] = useState(100);
  const [num, setNum] = useState(100);
  const computeValue = useMemo(() => computeExpensiveValue(count), [count]);

  function computeExpensiveValue(count) {
    console.log('computeExpensiveValue 被执行');
    const array = new Array(count).fill(count);
    return array.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  }

  const handleSetCount = () => {
    setCount(preCount => preCount * 2);
  };

  const handleSetNum = () => {
    setNum(preNum => preNum * 2);
  };

  return (
    <div>
      <div>{computeValue}</div>
      <div onClick={handleSetCount}>addCount{count}</div>
      <div onClick={handleSetNum}>addNum{num}</div>
    </div>
  )
};

export default MyUseMemo;
