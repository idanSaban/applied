import React, { Component } from 'react';
import { MdSearch } from "react-icons/md";
import '../../style/search.css'

class Search extends Component {

    render() {

        return (
            <div id="search">
                <MdSearch />
                <input type="text" placeholder="Search..."></input>

            </div>
        )
    }
}

export default Search