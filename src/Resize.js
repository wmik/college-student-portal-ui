import { useState, useEffect } from 'react';

function isMobile() {
  return window.innerWidth <= 720;
}

function Resize({ children }) {
  const [state, set] = useState(() => ({ isMobile: isMobile() }));
  useEffect(() => {
    window.addEventListener('resize', () => {
      set({ isMobile: isMobile() });
    });
  });
  return children(state);
}

export default Resize;
