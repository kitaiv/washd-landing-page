import React, { useState } from 'react';

import removeIcon from '../assets/images/remove.svg'
import addIcon from '../assets/images/add.svg'

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <h3>{title}</h3>
                <div>{isActive ? <img src={removeIcon} alt='remove'/> : <img src={addIcon} alt="add"/>}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;
