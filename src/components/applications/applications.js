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
