import {data1} from './model.js'
import {renderPosts} from './view.js'

class apiAjax{
    constructor () {
    }
    fetch(cityName) {
         $.ajax({
            method:"GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=b2417b23ff1ec764380779391951caa0"
            }).then(function(data){
                console.log(data.name)
            let postObj =  {name: data.name, temp: Math.floor(data.main.temp-273.15), comments: []}
            console.log(postObj)
            data1.addItem(postObj);
            renderPosts.renderPost(data1.postsArray);
            return postObj

        }).catch(function(data){
            console.log(data)
        })
        }
    }
        const ajaxApi = new apiAjax()
        export {ajaxApi}