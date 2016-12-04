/**
 * Created by shaokxu on 11/28/16.
 */

// increment
export function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    };
}

// add comment
export function addComment(postId, author, comment){
    console.log("[addComment], ", ...arguments);
    return {
        type: "ADD_COMMENT",
        postId,
        author,
        comment
    };
}

// remove comment
export function removeComment(postId, i){
    return {
        type: "REMOVE_COMMENT",
        postId,
        i
    }
}
