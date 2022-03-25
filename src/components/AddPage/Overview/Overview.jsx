import React from "react";

function Overview({register, errors}) {

    return (
        <label className={'film-element'}>
            {"overview"}
            <textarea  {...register('overview', {required: true})}
                       className={'film-element__input'}/>
            <div>{errors?.title && <p>Error!</p>}</div>
        </label>
    )
}
export default Overview;