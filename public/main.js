import {ajaxApi} from './ajax.js'
import {renderPosts} from './view.js'
import {data1} from './model.js'

class contrller{
    constructor(){
        this.data = data1;
        this.view = renderPosts;
    }
    initApplication(){
        $(".submitCity").click(()=>{
                    var cityName = $(".cityInput").val();
                    var itemObj = ajaxApi.fetch(cityName)

                })
        $('.posts').on('click', '.submitComment', function(){
            var name = $(this).closest('.postLi').find('h3').text();
            var text = $(this).closest(".commentsForm").find('.commentInput').val();
            controller.data.addComment(name, text)
            controller.view.renderPost(data1.postsArray)
        })   
    }  
}

var controller = new contrller();
controller.initApplication();