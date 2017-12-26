import React from 'react';
import {connect} from 'react-redux';
import './LoginContainer.scss';

import {setLoginName} from '../../Actions/MainActions';

class LoginContainer extends React.Component {
    constructor() {
        super();
        this.state   =   {loginName: null};
    }

    loginNameUpdate(e) {
        this.setState({loginName: e.target.value});
    }

    login() {
        this.props.dispatch(setLoginName(this.state.loginName))
        this.props.history.push(`/links`);
    }

    render() {
        return (
            <main className="LoginContainer">
                <section>
                    <input type="text" placeholder="Enter login name" onKeyUp={this.loginNameUpdate.bind(this)}/> <br />
                    <button onClick={this.login.bind(this)}>Login</button>
                </section>
            </main>
        )
    }
}

export default connect()(LoginContainer)