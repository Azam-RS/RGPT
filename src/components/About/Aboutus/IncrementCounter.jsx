import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const counterRef = useRef(null);
  const observer = useRef(null);

  const animateValue = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setCount(start); // Reset the count to start before animating
        animateValue();
        // Do not unobserve to allow re-animation
      }
    });

    if (counterRef.current) {
      observer.current.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.current.unobserve(counterRef.current);
      }
    };
  }, [start, end, duration]);

  return <span ref={counterRef}>{count}</span>;
};

export default Counter;
