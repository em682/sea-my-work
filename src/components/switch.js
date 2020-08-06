import React from 'react';
import '../style/switch.css';

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
        style={{ background: isOn && '#b28bc0' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;