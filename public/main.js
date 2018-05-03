import { postPost } from './weather.js';
import { addComment } from './comments.js'
import { newPost } from './class.js'

$(".submitCity").on('click', function(){
    var cityName = $(".cityInput").val();
postPost(cityName);
})

$('.posts').on('click', '.submitComment', function(){
    var text = $(this).closest(".commentsForm").find('.commentInput').val();
    var $clickedComment = $(this).closest('.commentsSec').find('.comments');
    addComment($clickedComment, text)
})