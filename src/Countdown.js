import React, { useState, useEffect } from 'react';
import './Countdown.css';
const Countdown = ({ onComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [count, onComplete]);

  return <div className="countdown-container">
    <div className="countdown">{count}
  
  </div>
  </div>;
};

export default Countdown;
