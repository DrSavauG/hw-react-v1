import React from "react";

function Input({ register, title, errors,type='text'}) {

    return (
        <label className={'film-element'}>
            {title}
            <input defaultValue={title} {...register(title, {required: true})}
                   className={'film-element__input'} type={type}
            />
            <div>{errors?.title && <p>Error!</p>}</div>
        </label>
    )
}
export default Input;