var addComment = function(myPost, comm){
    // $('.comments').empty();
    var comments = [];
    var comment = {
        text: comm
    }
    comments.push(comment)
    for (let i=0; i<comments.length; i++){
        myPost.append(comments[i].text+'<br>')
    }
}

export {addComment}