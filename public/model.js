import {ajaxApi} from './ajax.js'

class data{
    constructor(){
         this.postsArray = [];
        }
    addItem(weatherObj){
        this.postsArray.push(weatherObj)
    }
    addComment(name, text){
        let comment = {text: text}
        for (let i=0; i<this.postsArray.length; i++){
            if (this.postsArray[i].name === name){
                this.postsArray[i].comments.push(comment)
            }
        }
    }
}

const data1 = new data()
export {data1}
