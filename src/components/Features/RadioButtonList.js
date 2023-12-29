import React from "react";

const RadioButtonList = ({ selectedOption, onOptionChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="1"
          id="radio-button-1"
          checked={selectedOption === 1}
          onChange={() => onOptionChange(1)}
        />
      </label>

      <label>
        <input
          type="radio"
          id="radio-button-2"
          value="2"
          checked={selectedOption === 2}
          onChange={() => onOptionChange(2)}
        />
      </label>

      <label>
        <input
          type="radio"
          id="radio-button-3"
          value="3"
          checked={selectedOption === 3}
          onChange={() => onOptionChange(3)}
        />
      </label>

      <label>
        <input
          type="radio"
          id="radio-button-4"
          value="4"
          checked={selectedOption === 4}
          onChange={() => onOptionChange(4)}
        />
      </label>
    </div>
  );
};

export default RadioButtonList;
