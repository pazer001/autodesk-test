import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss';

import store from './store';

import LoginContainer from './Containers/Login/LoginContainer';
import LinksContainer from './Containers/Links/LinksContainer';
import AddLinksContainer from './Containers/AddLinks/AddLinksContainer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Route exact path="/" component={LoginContainer}/>
                        <Route path="/links" component={LinksContainer}/>
                        <Route path="/add-link" component={AddLinksContainer}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
