const mongoose = require('mongoose') ;
const {model , Schema}  = mongoose ;

const productSchema = new Schema ({
    title : {type:String , required:true},
    price : {type:String , required:true},
    description : {type: String , required:true},
    category : {type: String, required:true},
    selectedFile : {type: String, required:true}
})

const product = model('Products', productSchema);
module.exports = product ;