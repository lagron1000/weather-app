import { postsArray } from "./main.js";

var renderComments = function(myPost, name){
    myPost.empty();
    for (let i=0; i<postsArray.length; i++){
        if (postsArray[i].city === name){
            for (let j=0; j<postsArray[i].comments.length; j++){
                myPost.append(postsArray[i].comments[j].text+'<br>')
            }
        }
    } 
}

export {renderComments}