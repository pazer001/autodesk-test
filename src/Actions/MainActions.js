import {SET_LOGIN_NAME, ADD_LINK, LINK_VOTE, COMMENT_VOTE, SET_INITIAL_STATE, ADD_COMMENT} from '../constants'
export const setInitialState = () => dispatch => fetch('/data.json').then(res => res.json()).then(data => dispatch({type: SET_INITIAL_STATE, payload: data}));
export const setLoginName = loginName => ({type: SET_LOGIN_NAME, payload: loginName});
export const addLink = (title, timestamp) => ({type: ADD_LINK, payload: {title, timestamp}});
export const linkVote = (linkKey, type) => ({type: LINK_VOTE, payload: {linkKey, type}});
export const commentVote = (parentId, commentKey, type) => ({type: COMMENT_VOTE, payload: {parentId, commentKey, type}});
export const addComment = (text, id) => ({type: ADD_COMMENT, payload: {text, id}});