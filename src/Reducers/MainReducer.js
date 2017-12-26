import {SET_LOGIN_NAME, ADD_LINK, LINK_VOTE, COMMENT_VOTE, SET_INITIAL_STATE, ADD_COMMENT} from "../constants";

const initialState = {
    loginName: null,
    links: [],
    comments: {}
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_STATE: {
            const {links, comments} =   action.payload;
            state   =   {...state, links, comments};
            break;
        }

        case SET_LOGIN_NAME: {
            state = {...state, loginName: action.payload};
            break;
        }

        case ADD_LINK: {
            state.links.push({
                "title": action.payload.title,
                "submitDateTime": action.payload.timestamp,
                "submittingUsername": state.loginName,
                "votesCount": 0
            });
            const lastId = state.links.length - 1;
            state.links[lastId].id = lastId;
            break;
        }

        case LINK_VOTE: {
            const {linkKey, type}       =   action.payload;
            const links                 =   state.links;
            links[linkKey].votesCount   =   type ? links[linkKey].votesCount + 1 : links[linkKey].votesCount - 1;
            state   =   {...state, links: [...links]};
            break;
        }

        case COMMENT_VOTE: {
            const {parentId, commentKey, type} = action.payload;
            const comments  =   {...state.comments};

            //Make sure there will be no negative numbers
            if(comments[parentId][commentKey].votesCount === 0 && !type) return state;

            comments[parentId][commentKey].votesCount = type ? state.comments[parentId][commentKey].votesCount + 1 : state.comments[parentId][commentKey].votesCount - 1;
            state   =   {...state, comments: {...comments}};
            break;
        }

        case ADD_COMMENT: {
            const {text, id} =   action.payload;
            const comments  =   {...state.comments};

            if(!comments[id]) comments[id] = [];
            comments[id].push({
                id,
                text,
                submitDateTime: new Date().getTime(),
                submittingUsername: state.loginName,
                votesCount: 0
            });
            state   =   {...state, comments: {...comments}};
            break;
        }

        default:
            return state;
    }
    console.log(state);

    return state;
}