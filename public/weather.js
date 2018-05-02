var fetch = function(){
var cityName = $(".cityInput").val();

$.ajax({method:"GET", url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=d703871f861842b79c60988ccf3b17ec"})
.then(function(data){
    console.log(data)
    // $(".posts").empty();
    var source = $('#posts-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(data);
    $('.commentsList').append(newHTML);
}).catch(function(data){
    console.log(data)
})
}


export {fetch}



// class weather {
//     constructor(city){
//         this.city= city
//     }
//     fetch(){
//         var cityName = $(".cityInput").val();

// $.ajax({method:"GET", url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=d703871f861842b79c60988ccf3b17ec"})
// .then(function(data){
//     $(".posts").empty();
//     var source = $('#posts-template').html();
//     var template = Handlebars.compile(source);
//     var newHTML = template(data);
//     $('.posts').append(newHTML);
// }).catch(function(data){
//     console.log(data)
// })
//     }
// }

