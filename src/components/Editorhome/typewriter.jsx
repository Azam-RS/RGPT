import React, { useState, useEffect } from "react";
const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    if (
      currentText.substring(currentText.length + 1 - 3, currentText.length) ==
      "</"
    ) {
      currentText = currentText.substring(0, currentText.length + 1 - 3);
    }
  }, [currentIndex, delay, currentText]);
  return <pre dangerouslySetInnerHTML={{ __html: currentText }}></pre>;
};

export default Typewriter;
