import React from 'react';
import Scroll from './ScrollLoadSimple';

import './scroll.css';

const domNum = 20;

const ScrollApp = () => {

  return (
    <div className="scroll">
      {
        Array.from(
          { length: domNum },
          (text, index) => (
            <Scroll text={`第${index + 1}个元素`} key={index}/>
          )
        )
      }
    </div>
  )
};
export default ScrollApp;