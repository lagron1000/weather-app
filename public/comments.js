import { postsArray } from "./main.js";
import { commentsClass } from "./commentsClass.js";

var addComment = function(myPost, comm, name){
    var comment = new commentsClass(comm)

    for (let i=0; i<postsArray.length; i++){
        if (postsArray[i].city === name){
            postsArray[i].comments.push(comment)
        }
    }
}

export {addComment}