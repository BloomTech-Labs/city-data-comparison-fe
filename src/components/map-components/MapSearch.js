import React, {useState, useEffect} from "react";

const MapSearch = ({onSearch, setSearch}) => {

    const handleChange= e => setSearch(e.target.value);
    

    return(
        <form onSubmit={onSearch}>
            <input
                        name="search"
                        placeholder="Search" 
                        onChange={handleChange} 
            />
        </form>
    )
}

export default MapSearch;