import React, { useState } from 'react';
import '../../src/pages/categories.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((previewIsOpen) => !previewIsOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''} m-4`} onClick={toggleAccordion}>
      <div className="accordion-title white-text">{title}</div>
      {isOpen && 
      <div className="accordion-content">
        {content}
        <button>Add to workout</button>
        </div>}
    </div>
  );
};

export default Accordion;