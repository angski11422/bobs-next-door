import React from "react"

function Search({ search, onSearch}) {
    return(
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search names..." 
                value={search}
                onChange={(e) => onSearch(e.target.value)} 
                />
        </div>
    );
}

export default Search;