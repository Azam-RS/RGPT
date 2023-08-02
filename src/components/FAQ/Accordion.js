import React from "react";
import "../../../src/components/FAQ/accordion.css";

const Accordion = ({ title, content, expanded, onToggle }) => {
  return (
    <div className={`accordion ${expanded ? "expanded" : ""}`}>
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>
        <span className={`icon ${expanded ? "minus" : "plus"}`}></span>
      </div>
      {expanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
