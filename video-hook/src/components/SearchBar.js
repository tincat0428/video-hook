import React, { useState } from "react";

const SearchBar = ({ searchTerm }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchTerm(term);
    }

    return (
        <div>
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Find video :)</label>
                        <input
                            type="text"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;