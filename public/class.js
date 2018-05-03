import { postsArray } from './weather.js'

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
        var weatherP = new weather(name, main.temp)
        postsArray.push(weatherP)
        return weatherP
    }).catch(function(data){
        console.log(data)
    })
    }

    export {newPost}

