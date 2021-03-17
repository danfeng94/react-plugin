import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

const MySticky = () => {
  return <StickyContainer style={{ height: 2000 }}>
    <Sticky>
      {({ style }) => {
        return <div style={style}>Travel around the world</div>         // 需要吸顶的元素
      }}
    </Sticky>
      GoldCoast
  </StickyContainer>
}

export default MySticky;