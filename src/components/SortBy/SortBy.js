import React, {useState} from 'react';
import './style.css';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import {store} from "../AppRouter/AppRouter";

const SortBy = () => {
    const [checked, setChecked] = useState(store.SORTLISTS[0]);
    const onClick = (e) => {
        setChecked(e.target.value);
        store.params.sort = e.target.value;
        store.getFilms(store.setMovieList, store.params);
    }

    return (
        <label className="sort-by__title">
            <h6>sort by</h6>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <select
                    className="sort-by__select"
                    onChange={(e) => onClick(e)}
                    value={checked}
                >
                    {store.SORTLISTS.map((el) => (
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