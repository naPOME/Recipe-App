// CircleIcon.js
import React from 'react';

const CircleIcon = ({ bgColor, iconColor, description, icon }) => {
  const circleStyle = {
    backgroundColor: bgColor || '#000',
    color: iconColor || '#fff',
  };

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full w-16 h-16 flex items-center justify-center mb-1" style={circleStyle}>
        {icon && React.cloneElement(icon, { size: 32 })}
        <p className="text-xs text-white-700">{description}</p>
      </div>
    </div>
  );
};

export default CircleIcon;
