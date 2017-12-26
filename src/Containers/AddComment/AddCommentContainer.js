import React from 'react';
import {connect} from 'react-redux';
import './AddCommentContainer.scss';
import {addComment} from "../../Actions/MainActions";

class AddCommentContainer extends React.PureComponent {
    constructor() {
        super();
        this.state = {text: ''};
    }

    commentUpdate(e) {
        this.setState({text: e.target.value});
    }

    addComment(text) {
        const {dispatch, id, closeAddCommentPopup} = this.props;
        dispatch((addComment(text, id)));
        this.setState({addLinkPopupActive: false});
        closeAddCommentPopup();
    }

    render() {
        const {text} = this.state;
        const {closeAddCommentPopup} = this.props;
        return (
            <div className="AddCommentComponent">
                <section>
                    <textarea placeholder="Your Comment" onKeyUp={this.commentUpdate.bind(this)}/>
                    <button onClick={this.addComment.bind(this, text)}>Save</button>
                    <button onClick={closeAddCommentPopup}>Cancel</button>
                </section>
            </div>
        )
    }
}

export default connect()(AddCommentContainer)