const mongoose = require('mongoose')
require('./connectDb')
//创建表头
let zhangcaijiang = new mongoose.Schema({
    name:{type: String,required:true},
    desc:{type: String,required:true},
    price:{type: String,required:true},
    path:{type: String,required:true},
    stock:{type: String,required:true},
    putaway:{type: String,required:true},
    type:{type: String,required:true}
},
{
    // 集合名称
    collection: 'zhangcaijiang'
})
//将schema对象与集合关联
var Zhangcaijiang = mongoose.model('zhangcaijiang',zhangcaijiang)

module.exports = Zhangcaijiang