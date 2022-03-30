import React from 'react';
import {MultiSelect} from 'react-multi-select-component';
import './style.css';



const options = [
    { label: "crime", value: "crime" },
    { label: "documentary", value: "documentary" },
    { label: "horror", value: "horror",  },
    { label: "comedy", value: "comedy", },
];

const MultiSelected = ({ title, selectGenre, setSelectGenre}) => {

    const change = (arr) => {
        setSelectGenre(arr)
    }

// todo: прокинуть выше
    return (
        <div className={'film-element'}>
         {title}
                <MultiSelect
                    className="dark"
                    options={options}
                    value={selectGenre}
                    onChange={change}
                    labelledBy="Select"
                />
        </div>

    );
};

export default MultiSelected;