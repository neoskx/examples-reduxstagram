/**
 * Created by shaokxu on 11/28/16.
 */

// a reducer takes in two things:
// 1. the action(info about what happened)
// 2. copy of current state

function comments(state = [], action){

    switch (action.type){
        case "ADD_COMMENT" : {
            const postId = action.postId;
            const author = action.author;
            const comment = action.comment;
            let nState = {...state};
            if(!nState[postId]){
                nState[postId] = [];
            }
            nState[postId].push({
                user: author,
                text: comment
            });
            return nState;
        }
        case "REMOVE_COMMENT" : {
            const i = action.i;
            const postId = action.postId;

            let nState = {... state};
            delete nState[postId][i];
            return nState;
        }
        default:
            return state;
    }
}

export default comments;