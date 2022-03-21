import React, {useState} from 'react';
import './style.css';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";

const SortBy = (props) => {
    const SORTLISTS = props.SORTLISTS.SORTLISTS
    const [checked, setChecked] = useState(SORTLISTS[0]);

    return (
        <label className="sort-by__title">
            <h6>sort by</h6>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
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
            </ErrorBoundary>
        </label>
    );
};

export default SortBy;