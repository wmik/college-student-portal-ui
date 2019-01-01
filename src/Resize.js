import { useState, useEffect } from 'react';

function isMobile() {
  return window.innerWidth <= 720;
}

function Resize({ children }) {
  const [state, set] = useState(() => ({ isMobile: isMobile() }));
  useEffect(() => {
    const setMobile = () => {
      set({ isMobile: isMobile() });
    };
    window.addEventListener('resize', setMobile);
    return () => window.removeEventListener('resize', setMobile);
  });
  return children(state);
}

export default Resize;
