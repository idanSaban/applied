import React from 'react';
import { MdSearch } from "react-icons/md";

const NoResults = function () {
    return (
        <div id='noResults'>
            <MdSearch />
            <div>No results found</div>
        </div >
    )
}

export default NoResults