import React from 'react';
import './style.css';

const Button = (props) => {
    const {children,title, className,type='button',onClick=undefined} = props;
    return (
            <button onClick={onClick} type={type} className={className}>{title}{children}</button>
    );
};

export default Button;