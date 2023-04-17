import React, { useState } from 'react';
import './Switcher.scss';


const Switcher = ({ onPositionChange }) => {
    const [position, setPosition] = useState(1);
  
    const handleTransition = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition === 3 ? 1 : prevPosition + 1;
        onPositionChange(newPosition); // Call the callback with the new position
        return newPosition;
      });
    };
  
    const circleClassName = `circle position${position}`;
  
    return (
      <div className="switcher">
        <div className={circleClassName}  onClick={handleTransition}></div>
      </div>
    );
  };
  
  export default Switcher;
  