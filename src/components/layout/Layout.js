import React from 'react';
import { useSpring, animated } from 'react-spring';
import './layout.css';

const Layout = ({ children }) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
  return <animated.div style={fade}>{children}</animated.div>;
};

export default Layout;
