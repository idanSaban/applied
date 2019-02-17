import React, { Component } from 'react';
import Application from './application';
class Applications extends Component {

    render() {

        const { applications } = { ...this.props.data }

        return (
            <div id="applications">
                <div id="applications-container">

                    {applications.map(a => <Application data={a} />)}
                </div>
            </div>
        )
    }
}

export default Applications;