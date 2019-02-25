import React, { Component } from 'react';
import { MdMoreVert, MdOpenInNew } from "react-icons/md";

import '../../style/applications.css'

class Application extends Component {
    render() {
        const { company, position, link, complete } = this.props.data

        return (
            <div className="application">
                <div>
                    <MdMoreVert />
                </div>
                <div>{company}</div>
                <div>{position}</div>
                <div>{complete ? "V" : "-"}</div>
                <div>
                    <a href={link} target="_blank">
                        <MdOpenInNew />
                    </a>
                </div>
            </div>
        )
    }
}
export default Application