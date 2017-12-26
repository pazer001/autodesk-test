import React from 'react';
import {connect} from 'react-redux';
import './AddLinksContainer.scss';

import {addLink} from '../../Actions/MainActions';

class AddLinksContainer extends React.Component {
    constructor() {
        super();
        this.state  =   {title: null};
    }

    titleUpdate(e) {
        this.setState({title: e.target.value || null});
    }

    addLink() {
        const {title}       =   this.state;
        const timestamp     =   new Date().getTime();
        this.props.dispatch(addLink(title, timestamp));
        this.props.history.push(`/links`);

    }

    render() {
        return (
            <main className="AddLinksContainer">
                <section>
                    <input type="text" placeholder="Title" onKeyUp={this.titleUpdate.bind(this)} /><br />
                    <button onClick={this.addLink.bind(this)}>Add Link</button>
                </section>
            </main>
        )
    }
}

export default connect()(AddLinksContainer)