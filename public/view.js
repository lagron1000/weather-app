import {data1} from './model.js'
import {ajaxApi} from './ajax.js'


class render{
    constructor(){

    }
    renderPost (arr) {
        $(".commentsList").empty();
        var arrObj = {arr}
        var source = $("#posts-template").html();
        var template = Handlebars.compile(source);
        var newHTML = template(arrObj);
        $(".commentsList").append(newHTML);
    }
}

const renderPosts = new render()
export {renderPosts}