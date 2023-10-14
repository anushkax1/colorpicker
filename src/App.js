import React, { useState } from 'react';
import './App.css';

const ColorPicker = () => {
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    '#c6acc9',
    '#ecb4bf',
    '#fdd6b5',
    '#fdf3b8',
    '#a7e4ae',
    '#bfffe6',
    '#8699d1',
    '#dba9ce',
    '#aae7e8',
    '#efe6eb',
    '#47d1d5',
    '#e8d2ff',
    '#c1d1fd',
    '#d9e0fc',
    '#ffe0f1',
  ];
  

  const toggleColorOptions = () => {
    setShowColorOptions(!showColorOptions);
  };

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
    setSelectedColor(color);
    setShowColorOptions(false); 
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <br />
      <button onClick={toggleColorOptions}>
        {showColorOptions ? 'Hide Color Options' : 'Pick a Color'}
      </button>
      {showColorOptions && (
        <div className="bGButton">
          {colors.map((color, index) => (
            <button
              key={index}
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => changeBackgroundColor(color)}
            />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ColorPicker;
