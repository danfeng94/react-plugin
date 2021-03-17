import React from "react";
import { useSpring, animated } from "react-spring";

const MySpring = () => {
  const props = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, color: "red" },
    from: { opacity: 0, color: 'orange' },
  });
  return <animated.span style={props}>GoldCoast</animated.span>;
};

export default MySpring;
