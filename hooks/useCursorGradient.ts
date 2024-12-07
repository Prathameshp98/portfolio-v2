"use client";
import { useState, useEffect } from 'react';

// set the position of gradient and removes it after 1 sec of inactivity.
const useCursorGradient = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 500, y: e.clientY - 500 });
      setVisible(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        setVisible(false);
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return { position, visible };
};

export default useCursorGradient;
