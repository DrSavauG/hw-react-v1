import React, {useState} from 'react';
import {MultiSelect} from 'react-multi-select-component';
import './style.css';



const options = [
    { label: "crime", value: "crime" },
    { label: "documentary", value: "documentary" },
    { label: "horror", value: "horror",  },
    { label: "comedy", value: "comedy", },
];

const MultiSelected = ({ register, title, errors,type='text'}) => {
    const [selected, setSelected] = useState([]);

    return (
        <div className={'film-element'}>
         <p>{title}</p>
            {/*<pre>{JSON.stringify(selected)}</pre>*/}
            {/*<div className={'film-element__input'}>*/}
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
            {/*</div>*/}

        </div>

    );
};

export default MultiSelected;