import React from 'react';
import './AddCommentComponent.scss';

export default class AddCommentComponent extends React.PureComponent {
    constructor() {
        super();
        this.state  =   {text: ''};
    }
    commentUpdate(e) {
        this.setState({text: e.target.value});
    }
    render() {
        const {addComment}      =   this.props;
        const {text}     =   this.state;
        return (
            <div className="AddCommentComponent">
                <section>
                    <input type="text" placeholder="Your Comment" onKeyUp={this.commentUpdate.bind(this)}/>
                    <button onClick={() => addComment(text)}>Add Comment</button>
                </section>
            </div>
        )
    }
}
