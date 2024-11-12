import React, { useState, useRef } from 'react';

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {children}
      {isVisible && (
        <div 
          ref={tooltipRef}
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-80%)',
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;