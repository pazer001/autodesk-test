import React from 'react';
import {connect} from 'react-redux';
import './CommentComponent.scss';
import moment from "moment/moment";

import {commentVote, addComment} from "../../Actions/MainActions";
import AddCommentComponent from '../AddComment/AddCommentComponent';
import CommentContainer from '../../Containers/Comments/CommentsContainer';

class CommentComponent extends React.Component {
    constructor() {
        super();
        this.state  =   {addLinkPopupActive: false, showComments: false};
    }

    toggleAddLinkPopup() {
        this.setState({addLinkPopupActive: true});
    }

    addComment(text) {
        const {dispatch, id}    =   this.props;
        console.log(text, id)
        dispatch((addComment(text, id)));
        this.setState({addLinkPopupActive: false});
    }

    toggleShowComments() {
        this.setState({showComments: !this.state.showComments})
    }

    render() {
        const {id, parentId, commentKey, text, commentsLength, submitDateTime, votesCount, submittingUsername, dispatch}  =   this.props;
        const {addLinkPopupActive, showComments}  =   this.state;
        const submitted     =   moment(Number(submitDateTime)).from(moment(new Date().getTime()));
        // console.log(commentsLength)
        return (
            <div className="CommentComponent">
                <section className="comment">
                    <div className="vote">
                        <i className="fa fa-arrow-up" onClick={() => dispatch(commentVote(parentId, commentKey, true))}></i>
                        <span>{votesCount}</span>
                        <i className="fa fa-arrow-down" onClick={() => dispatch(commentVote(parentId, commentKey, false))}></i>
                    </div>
                    <div className="content">
                        <div className="comment">{text}</div>
                        <div className="submitted">submitted {submitted} by {submittingUsername}</div>
                        <div className="comments-count"><span onClick={this.toggleShowComments.bind(this)}>{commentsLength} comments - </span><span onClick={this.toggleAddLinkPopup.bind(this)}>Add comment</span></div>
                    </div>

                {addLinkPopupActive ? <AddCommentComponent addComment={this.addComment.bind(this)}/> : null}
                </section>
                <section className="comments">
                    {commentsLength && showComments ? <CommentContainer id={id}  /> : null}
                </section>

            </div>
        )
    }
}

export default connect()(CommentComponent)