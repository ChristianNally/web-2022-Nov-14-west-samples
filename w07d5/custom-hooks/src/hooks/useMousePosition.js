import {useEffect, useState} from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };
    
    document.addEventListener('mousemove', mouseMoveListener);

    const cleanup = () => {
      document.removeEventListener('mousemove', mouseMoveListener);
    };

    return cleanup;
  }, []);

  return coords;
};

export default useMousePosition;
