const mongoose = require('mongoose')
require('./connectDb')
//创建表头
let martin_ad = new mongoose.Schema({
    name:{type: String,required:true},
    jump:{type: String,required:true},
    address:{type: String,required:true}
},
{
    // 集合名称
    collection: 'martin-ad'
})
//将schema对象与集合关联
var Martin_ad = mongoose.model('martin-ad',martin_ad)

module.exports = Martin_ad