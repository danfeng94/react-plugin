import React, { useState } from 'react'

export default () => {
  const [obj, setObj] = useState({
    count: 0
  });

  return (
    <div>
      Count: {obj.count}
      <button onClick={() => setObj({...obj.count, count: obj.count + 1})}>Add</button>
      <button onClick={() => setObj({...obj.count, count: obj.count - 1})}>Sub</button>
    </div>
  )
}
