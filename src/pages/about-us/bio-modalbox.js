import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./biomodal.css";
library.add(faTimes);



const MyModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

   // Function to stop click events from propagating to the overlay

   const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='modalholder' onClick={onClose}>
      <div className='modalbio' onClick={stopPropagation}> 
        <button onClick={onClose} className="clsbtn"><FontAwesomeIcon icon={faTimes}/></button>
        
        {children}
      </div>
    </div>
  );
};

export default MyModal;
