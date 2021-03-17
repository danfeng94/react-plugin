import React, {useState, useEffect} from 'react';

function UseMousePosition() {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({x: e.clientX, y: e.clientY});
    };
    document.addEventListener('mousemove', updateMouse);
    return () => {
      document.removeEventListener('mousemove', updateMouse);
    };
  });
  return position;
}

const MySelf = () => {
  const position = UseMousePosition();

  return (
    <div>
      <p>x: {position.x}</p>
      <p>y: {position.y}</p>
    </div>
  )
};

export default MySelf;
