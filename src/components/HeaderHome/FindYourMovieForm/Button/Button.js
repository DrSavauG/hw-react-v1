import React from 'react';
import './style.css';

const Button = ({children,title, className,type='button'}) => {
    return (
            <button type={type} className={className}>{title}{children}</button>
    );
};

export default Button;