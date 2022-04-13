import React from 'react';
import {MultiSelect} from 'react-multi-select-component';
import './style.css';
import {store} from "../../AppRouter/AppRouter";

const MultiSelected = ({ title, selectGenre, setSelectGenre}) => {
    const options = [];
    const handleNewField = (value) => ({
        label: value.toLowerCase(),
        value: value.toLowerCase(),
    });
    store.NAVIGATION.map(el => el === 'all' ? '' : options.push(handleNewField(el)));

    return (
        <div className={'film-element'}>
            {title}
            <MultiSelect
                overrideStrings={true}
                // closeOnChangedValue={true}
                onCreateOption={handleNewField}
                isCreatable={true}
                // shouldToggleOnHover={true}
                // disableSearch={true}
                hasSelectAll={false}
                className={"dark"}
                options={options}
                value={selectGenre}
                onChange={setSelectGenre}
                labelledBy="Select"
            />
        </div>

    );
};

export default MultiSelected;