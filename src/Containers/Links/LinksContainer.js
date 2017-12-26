import React from 'react';
import {connect} from 'react-redux';
import './LinksContainer.scss';

import {setInitialState} from '../../Actions/MainActions';
import LinkComponent from '../../Components/Link/LinkComponent';


class LinksContainer extends React.Component {
    routeAddLink() {
        this.props.history.push(`/add-link`);
    }

    componentDidMount() {
        if (!this.props.links.length) this.props.dispatch(setInitialState());
    }

    render() {
        const {links, comments, dispatch} = this.props;
        return (
            <main className="LinksContainer">
                <header>
                    <button onClick={this.routeAddLink.bind(this)}>Add Link</button>
                </header>

                {links.map((link, key) =>
                    <LinkComponent linkId={link.id}
                                   key={key}
                                   index={key}
                                   title={link.title}
                                   submittingUsername={link.submittingUsername} submitDateTime={link.submitDateTime}
                                   votesCount={link.votesCount}
                                   commentsLength={comments[link.id] ? comments[link.id].length : 0}
                                   dispatch={dispatch}/>
                )}
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        links: state.links,
        comments: state.comments
    }
};

export default connect(mapStateToProps)(LinksContainer);