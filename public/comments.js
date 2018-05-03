import { postsArray } from "./main.js";

var addComment = function(myPost, comm, name){
    // $('.comments').empty();
    var comment = {
        text: comm
    }
    for (let i=0; i<postsArray.length; i++){
        if (postsArray[i].city === name){
            postsArray[i].comments.push(comment)
        }
    }
    // comments.push(comment)
    // for (let i=0; i<comments.length; i++){
    //     myPost.append(comments[i].text+'<br>')
    // }
}

export {addComment}