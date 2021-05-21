//import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
        errMess:null,
        comments:[]
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT :
            var comment = action.payload;
            //console.log("Comment: ", comment);
            //return state.concat(comment);
            return {...state, comments: state.comments.concat(comment)};

        case ActionTypes.COMMENTS_FAILED :
            return {...state, errMess: action.payload, comments :[]}

            case ActionTypes.ADD_COMMENTS :
                return{...state, errMess: null, comments:action.payload}
        default:
            return state;
    }
}