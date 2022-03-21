import React, {useState} from 'react';
import './style.css';

const SortBy = (props) => {
const SORTLISTS = props.SORTLISTS.SORTLISTS
    const [checked, setChecked] = useState(SORTLISTS[0]);

    return (
        <label className="sort-by__title">
            <h6>sort by</h6>
            <select
                className="sort-by__select"
                onChange={(e) => setChecked(e.target.value)}
                value={checked}
            >
                {SORTLISTS.map((el) => (
                    <option key={el} className="sorting__el" value={el}>
                        {el}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default SortBy;