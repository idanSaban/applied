import React, { Component } from 'react';
import Application from './application';
import NoResults from './noResults';
class Applications extends Component {

    render() {
        const { applications } = this.props.data

        return (
            <div id="applications">
                {applications.length > 0
                    ?
                    <div id="applications-container">
                        <Header />
                        {applications.map((a, i) => <Application key={i} data={a} />)}
                    </div>
                    :
                    <NoResults />
                }
            </div>
        )
    }
}

export default Applications;

const Header = function () {

    return (
        <div id='applications-header'>
            <div></div>
            {
                ['Company', 'Position', 'Status'].map((item, i) => <div key={i}>{item}</div>)
            }
        </div>
    )
}