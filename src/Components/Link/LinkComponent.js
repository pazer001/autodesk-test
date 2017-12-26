import React from 'react';
import moment from 'moment';
import './LinkComponent.scss';

import CommentsContainer from '../../Containers/Comments/CommentsContainer';
import {linkVote} from "../../Actions/MainActions";

export default class LinkComponent extends React.Component {
    constructor() {
        super();
        this.state = {toggleComments: false};
    }

    toggleComments() {
        const {toggleComments} = this.state;
        this.setState({toggleComments: !toggleComments})
    }

    render() {
        const {linkId, index, title, submittingUsername, submitDateTime, votesCount, commentsLength, dispatch} = this.props;
        const {toggleComments} = this.state;
        const submitted = moment(Number(submitDateTime)).from(moment(new Date().getTime()));

        console.log('LinkComponent')

        return (
            <article key={index} className="LinkComponent">
                <section className="link">
                    <div className="vote">
                        <i className="fa fa-arrow-up" onClick={() => dispatch(linkVote(index, true))}></i>
                        <span>{votesCount}</span>
                        <i className="fa fa-arrow-down" onClick={() => dispatch(linkVote(index, false))}></i>
                    </div>
                    <div className="image"
                         style={{background: 'url(https://b.thumbs.redditmedia.com/elVzbz1emB1dJKzJSAZgmzE5mAzzB718TD4vpFviyIE.jpg)'}}>

                    </div>
                    <div className="content">
                        <h1>{title}</h1>
                        <div className="submitted">submitted {submitted} ago by {submittingUsername}</div>
                        <div className="comments-count"
                             onClick={this.toggleComments.bind(this)}>{commentsLength} comments
                        </div>
                    </div>
                </section>
                {toggleComments && commentsLength ?
                    <section className="comments"><CommentsContainer id={linkId}/></section> : null}

            </article>
        )
    }
}