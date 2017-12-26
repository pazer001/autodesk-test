import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import MainReducer from './Reducers/MainReducer';

export default createStore(MainReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));