import { postPost } from './weather.js';
import { addComment } from './comments.js'
import { newPost } from './class.js'
import { renderComments } from './render.js';

var postsArray = [];

$(".submitCity").on('click', function(){
    var cityName = $(".cityInput").val();
newPost(cityName);
})

$('.posts').on('click', '.submitComment', function(){
    var text = $(this).closest(".commentsForm").find('.commentInput').val();
    var $clickedComment = $(this).closest('.commentsSec').find('.comments');
    var name = $(this).closest('.postLi').find('h3').text()
    addComment($clickedComment, text, name)
    renderComments($clickedComment, name)
})

export {postsArray}