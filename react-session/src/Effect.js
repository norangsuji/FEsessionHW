import React, { useState, useEffect } from "react";

const Effect = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue % 2 === 0) {
      console.log("Input value changed:", inputValue);
    } else {
      alert("홀수입니다 !");
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Effect Component</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default Effect;