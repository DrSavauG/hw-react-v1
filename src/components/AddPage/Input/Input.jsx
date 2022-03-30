import React from "react";
import './style.css';

function Input({children}) {
    const {register, title, errors, type = 'text'} = children;

    return (
        <label className={'film-element'}>
            {title}
            <input defaultValue={title} {...register(title, {required: true})}
                   className={'film-element__input'} type={type} step={0.1} min={0.1} max={10}
            />
            <div>{errors?.title && <p>Error!</p>}</div>
        </label>
    )
}
export default Input;
