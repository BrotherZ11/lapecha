import React, { useState } from 'react';

const MenuSection = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h2 onClick={toggleOpen} style={{ cursor: 'pointer' }}>
                {title}
            </h2>
            {isOpen && (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MenuSection;
