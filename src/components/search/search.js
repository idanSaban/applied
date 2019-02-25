import React, { Component } from 'react';
import { MdSearch } from "react-icons/md";

class Search extends Component {

    render() {

        return (
            <div id="search">
                <MdSearch />
                {/* <input type="text"></input> */}
            </div>
        )
    }
}

export default Search