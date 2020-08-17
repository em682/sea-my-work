import React from 'react';
import '../style/switch.css';
// switch toggle component
// credit James King
//https://upmostly.com/tutorials/build-a-react-switch-toggle-component

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div>
      <input
         checked={isOn}
         onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        
      />
      <label
        style={{ background: isOn && '#00a8ff' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;