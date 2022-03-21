import React, {useState} from 'react';
import './style.css';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const SortBy = (props) => {
const SORTLISTS = props.SORTLISTS.SORTLISTS
    const [checked, setChecked] = useState(SORTLISTS[0]);

    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
    );
};

export default SortBy;