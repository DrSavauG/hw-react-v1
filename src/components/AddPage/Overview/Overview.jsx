import React from "react";

function Overview({register, errors,defaultValue,name}) {
    return (
        <label className={'film-element'}>
            {name}
        <textarea placeholder={name} {...register(name, {required: true})}
                       className={'film-element__input'} defaultValue={defaultValue}/>
            <div>{errors?.title && <p>Error!</p>}</div>
        </label>
    )
}
export default Overview;