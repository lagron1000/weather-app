import { fetch } from './weather.js';
import { addComment } from './comments.js'

$(".submitCity").on('click', function(){
fetch();
})

$('.posts').on('click', '.submitComment', function(){
    var text = $(this).closest(".commentsForm").find('.commentInput').val();
    var $clickedComment = $(this).closest('.commentsSec').find('.comments');
    addComment($clickedComment, text)
})