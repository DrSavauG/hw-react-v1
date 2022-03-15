import React from 'react';
import './style.css';

const Button = ({title,className}) => {
    return (
            <button type={'button'} className={className}>{title}</button>
    );
};

export default Button;