import React, {useState} from 'react';

const Form = (props) => {
    const {handleSubmit,reset,selectValue,setSelectValue,onSubmit,className} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            {props.children[0]}
            {props.children[1]}
        </form>
    );
};

export default Form;