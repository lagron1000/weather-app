import { postsArray } from './main.js'

class weather{
    constructor(city, temp){
        this.city = city;
        this.temp = temp;
        this.comments = []
    }
}


var newPost = function(cityName){
    $.ajax({method:"GET", url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=d703871f861842b79c60988ccf3b17ec"})
    .then(function(data){
        var weatherP = new weather(data.name, data.main.temp)
        postsArray.push(weatherP)
        var source = $('#posts-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(weatherP);
        $('.commentsList').append(newHTML);
    }).catch(function(data){
        console.log(data)
    })
    }

    export {newPost}

