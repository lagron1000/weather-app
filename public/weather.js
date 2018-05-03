import { newPost } from './class.js'


var postPost = function(cityName){
    var source = $('#posts-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(newPost(cityName));
    $('.commentsList').append(newHTML);
}

export {postPost}