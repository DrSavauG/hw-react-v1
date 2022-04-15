import React from "react";
import './style.css';

function Input({children}) {
    const {placeholder,register, title, errors, type = 'text',defaultValue = title} = children;

    return (
        <label className={'film-element'}>
            {title}
            <input placeholder={title} defaultValue={defaultValue} {...register(title, {required: true})}
                   className={'film-element__input'} type={type} step={0.1} min={0.1} max={10}
            />
            <div>{errors?.title && <p>Error!</p>}</div>
        </label>
    )
}
export default Input;
