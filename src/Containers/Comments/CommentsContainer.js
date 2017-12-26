import React from 'react';
import {connect} from 'react-redux';
import './CommentsContainer.scss';
import CommentComponent from "../../Components/Comment/CommentComponent";

class CommentsContainer extends React.Component {
    render() {
        const {id, comments}    =   this.props;
        return (
            <div className="CommentsContainer">
                {comments[id].map((comment, key) =>
                    <CommentComponent key={key} commentKey={key} parentId={id} id={comment.id} text={comment.text} submitDateTime={comment.submitDateTime} votesCount={comment.votesCount} submittingUsername={comment.submittingUsername} commentsLength={comments[comment.id] ? comments[comment.id].length : 0} />
                )}
            </div>
        )
    }
}

const mapStateToProps   =   state => {
    return {
        comments: state.comments
    }
};

export default connect(mapStateToProps)(CommentsContainer)