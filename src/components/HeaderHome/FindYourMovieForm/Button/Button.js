import React from 'react';
import './style.css';

const Button = ({children,title, className,type='button',onClick=''}) => {//todo refactor children =>props
    return (
            <button onClick={onClick} type={type} className={className}>{title}{children}</button>
    );
};

export default Button;
