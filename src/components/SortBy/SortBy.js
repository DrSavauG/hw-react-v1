import React, {useReducer, useState} from 'react';
import './style.css';

const SHORTLISTS = ['release date', '1', '2', '3']
const SortBy = () => {
    const [checked, setChecked] = useState(SHORTLISTS[0]);

    return (
        <label className="sort-by__title">
            <h6>sort by</h6>
            <select
                className="sort-by__select"
                onChange={(e) => setChecked(e.target.value)}
                value={checked}
            >
                {SHORTLISTS.map((el) => (
                    <option key={el} className="sorting__el" value={el}>
                        {el}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default SortBy;