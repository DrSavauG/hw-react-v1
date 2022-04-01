import React, {useState} from 'react';

const Form = (props) => {
    const {handleSubmit,reset,selectGenre,setSelectGenre,onSubmit} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'modal-window__list-wrapper'}>
            {props.children[0]}
            {props.children[1]}
        </form>
    );
};

export default Form;