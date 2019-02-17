import React, { Component } from 'react';
import '../../style/applications.css'
class Application extends Component {
    render() {
        const { company, position, link, complete } = this.props.data

        return (
            <div className="application">
                <div>{company}</div>
                <div>{position}</div>
                <div>{link}</div>
                <div>{complete ? "V" : "-"}</div>
            </div>
        )
    }
}
export default Application