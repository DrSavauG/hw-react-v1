import React, {useState} from 'react';
import './style.css';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";

const SortBy = ({children}) => {
    const [checked, setChecked] = useState(children[0]);

    return (
        <label className="sort-by__title">
            <h6>sort by</h6>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <select
                    className="sort-by__select"
                    onChange={(e) => setChecked(e.target.value)}
                    value={checked}
                >
                    {React.Children.map(children,(el) => (
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